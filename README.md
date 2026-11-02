# Grab The Blaster 🚀
## Alessio Biancalana's italian weblog

Well well, I finally made all my blog available under Jekyll.

## Technologies I'm using
- [Jekyll](http://jekyllrb.com/)
- Custom HTML/CSS theme with MADE Dillan headings
- [GitHub Pages](https://pages.github.com/)
- [Thor](http://whatisthor.com/)
- [lunr.js](http://lunrjs.com/)

## Run, debug, study my shit
Just download this repository, and serve the content using the Jekyll built-in webserver. You can use Thor's `serve` task.

```bash
$ git clone git@github.com:dottorblaster/dottorblaster.github.io.git
$ cd dottorblaster.github.io
$ bundle install
$ bundle exec thor serve
```

## Theme

The blog uses a reading-first editorial layout inspired by schedkit: warm paper
and charcoal backgrounds, fine rules, muted blue accents, and an original inline
SVG workstation illustration. **MADE Dillan** stays the signature face for the
masthead, titles, and all article subheadings. Article text and excerpts use Georgia
with system serif fallbacks; navigation uses a system sans-serif, and metadata and code use a system
monospace. No external font service or front-end build is needed.

- `_includes/header.html` and `footer.html`: shared navigation, search, social
  links, official Retronerds webring (with a no-JavaScript fallback), and Git metadata.
- `_includes/workbench.svg`: original, theme-aware homepage illustration.
- `index.html`: chronological, paginated feed; linked posts retain a separate permalink.
- `_layouts/post.html`, `link.html`, and `page.html`: compact, reading-focused pages.
- `public/css/grabtheblaster.css`: design tokens, typography, layout, responsive and print styles.
- `public/css/syntax.css`: light/dark Rouge syntax colours.
- `public/js/blog.js`: system-aware theme toggle (`gtb-theme` in local storage),
  `/` search shortcut, webring shadow-DOM styling, and on-demand Disqus comments.

The legacy Poole and Font Awesome assets are no longer loaded by the theme.
Post content, URLs, RSS, and Open Graph image generation are unchanged.

## Check the theme

```bash
bundle exec jekyll build
python3 tests/site_smoke.py _site
node --test tests/search.test.cjs

# Also check deployment under a subpath:
bundle exec jekyll build --baseurl /preview --destination /tmp/gtb-preview
python3 tests/site_smoke.py /tmp/gtb-preview --baseurl /preview
```

For visual checks, run `bundle exec jekyll serve` and check the home, page 2,
About, an English post, a linked post, a code-heavy post, search, and the 404 page
at mobile and desktop widths in both themes. Confirm that the webring remains
usable if its external script is blocked, `/` focuses the footer search, theme
choice persists, and comments load only when requested.
