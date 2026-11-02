"""Dependency-free checks for the built Jekyll theme.

Usage: python3 tests/site_smoke.py [destination] [--baseurl /preview]
Run `bundle exec jekyll build` first. The checks also support a subpath build.
"""

import argparse
from html.parser import HTMLParser
from pathlib import Path
import unittest
from urllib.parse import unquote, urlsplit
import xml.etree.ElementTree as ET


class Document(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.elements = []
        self.nested_links = False
        self.in_link = False
        self.in_head = False
        self.in_title = False
        self.title = ""
        self.feed(path.read_text(encoding="utf-8"))

    def handle_starttag(self, tag, attrs):
        self.elements.append((tag, dict(attrs)))
        if tag == "head":
            self.in_head = True
        if tag == "title" and self.in_head:
            self.in_title = True
        if tag == "a":
            self.nested_links |= self.in_link
            self.in_link = True

    def handle_endtag(self, tag):
        if tag == "a":
            self.in_link = False
        if tag == "head":
            self.in_head = False
        if tag == "title":
            self.in_title = False

    def handle_data(self, data):
        if self.in_title:
            self.title += data

    def select(self, tag=None, **attrs):
        return [a for t, a in self.elements
                if (tag is None or t == tag)
                and all(a.get(k) == v for k, v in attrs.items())]

    def with_class(self, name):
        return [a for _, a in self.elements if name in a.get("class", "").split()]


parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("destination", nargs="?", default="_site", type=Path)
parser.add_argument("--baseurl", default="")
args = parser.parse_args()
ROOT = args.destination.resolve()
BASEURL = args.baseurl.rstrip("/")


class SiteSmokeTests(unittest.TestCase):
    def resolve_url(self, url):
        path = unquote(urlsplit(url).path)
        self.assertTrue(path.startswith(BASEURL + "/"), url)
        target = ROOT / path[len(BASEURL):].lstrip("/")
        if target.is_dir():
            target /= "index.html" if (target / "index.html").is_file() else "index.xml"
        self.assertTrue(target.is_file(), f"Missing local target: {url}")
        return target

    def setUp(self):
        self.home = Document(ROOT / "index.html")

    def test_home_has_editorial_structure_and_valid_links(self):
        self.assertEqual(len(self.home.select("h1")), 1)
        self.assertTrue(self.home.with_class("hero"))
        self.assertTrue(self.home.with_class("workbench"))
        self.assertTrue(self.home.with_class("post-entry"))
        self.assertFalse(self.home.nested_links)
        self.assertFalse(self.home.with_class("statusbar"))
        for link in self.home.select("a"):
            if link.get("href", "").startswith("/"):
                self.resolve_url(link["href"])

    def test_assets_and_signature_typeface(self):
        for link in self.home.select("link"):
            if link.get("rel") in {"stylesheet", "preload", "icon", "apple-touch-icon"}:
                self.resolve_url(link["href"])
        stylesheet = (ROOT / "public/css/grabtheblaster.css").read_text()
        self.assertIn('font-family: "MADE Dillan"', stylesheet)
        self.assertTrue((ROOT / "public/made_dillan.woff2").is_file())

    def test_footer_search_webring_and_revision(self):
        form, = self.home.select("form", role="search")
        self.assertEqual(form["method"], "get")
        search = Document(self.resolve_url(form["action"]))
        self.assertTrue(search.select(id="search-results"))
        self.assertTrue(self.home.select("input", name="query"))
        self.assertTrue(self.home.select("webring-banner"))
        for suffix in ["prev", "random", "next"]:
            self.assertTrue(self.home.select("a", href=f"https://retronerds.netlify.app/{suffix}"))
        self.assertTrue(self.home.with_class("git-log"))
        self.assertTrue(self.home.with_class("social-links"))

    def test_archive_pagination_and_link_posts(self):
        pages = sorted((ROOT / "page").glob("*/index.html"))
        self.assertTrue(pages)
        found_link = False
        site_name, = self.home.select("meta", property="og:site_name")
        for path in pages:
            page = Document(path)
            self.assertEqual(page.title, f"Pagina {path.parent.name} · {site_name['content']}")
            self.assertFalse(page.nested_links, path)
            self.assertEqual(len(page.select("h1")), 1, path)
            self.assertFalse(page.with_class("hero"), path)
            for relation in ["prev", "next"]:
                for link in page.select("a", rel=relation):
                    self.resolve_url(link["href"])
            found_link |= bool(page.with_class("post-entry-link"))
        self.assertTrue(found_link)

    def test_reading_pages_and_language_badges(self):
        for route in ["2026/07/linewatch", "2026/02/scared-humans-violence",
                      "2018/10/62-percent-web-unsupported-php"]:
            page = Document(ROOT / route / "index.html")
            self.assertEqual(len(page.select("h1")), 1)
            self.assertFalse(page.with_class("hero"))
            self.assertTrue(page.with_class("post-body"))
            badge, = page.with_class("lang-badge")
            self.assertIn(badge["lang"], {"en", "it"})
            self.assertTrue(badge.get("title"))
            self.assertTrue(page.with_class("comments-load"))
            self.assertFalse(any("disqus.com/embed" in script.get("src", "")
                                 for script in page.select("script")))

    def test_feed_and_canonical(self):
        feed = ET.parse(ROOT / "feed/index.xml")
        self.assertTrue(feed.findall("./channel/item"))
        canonical, = self.home.select("link", rel="canonical")
        self.assertIn(urlsplit(canonical["href"]).scheme, {"http", "https"})
        self.assertTrue(urlsplit(canonical["href"]).netloc)
        self.assertTrue(self.home.select("link", type="application/rss+xml"))


if __name__ == "__main__":
    unittest.main(argv=[__file__])
