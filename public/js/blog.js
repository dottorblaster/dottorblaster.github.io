(function () {
  'use strict';

  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  var preference = null;
  try { preference = localStorage.getItem('gtb-theme'); } catch (_) {}
  if (preference !== 'light' && preference !== 'dark') preference = null;

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (toggle) {
      var label = theme === 'dark' ? 'Passa al tema chiaro' : 'Passa al tema scuro';
      toggle.setAttribute('aria-label', label);
      toggle.title = label;
    }
  }

  applyTheme(preference || (systemTheme.matches ? 'dark' : 'light'));
  if (toggle) {
    toggle.hidden = false;
    toggle.addEventListener('click', function () {
      preference = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(preference);
      try { localStorage.setItem('gtb-theme', preference); } catch (_) {}
    });
  }
  function followSystem(event) {
    if (!preference) applyTheme(event.matches ? 'dark' : 'light');
  }
  if (systemTheme.addEventListener) systemTheme.addEventListener('change', followSystem);
  else systemTheme.addListener(followSystem);
  window.addEventListener('storage', function (event) {
    if (event.key !== 'gtb-theme' && event.key !== null) return;
    preference = event.newValue === 'dark' || event.newValue === 'light' ? event.newValue : null;
    applyTheme(preference || (systemTheme.matches ? 'dark' : 'light'));
  });

  var searchInput = document.getElementById('footer-query');
  var searchHint = document.querySelector('.keyboard-hint');
  if (searchHint) searchHint.hidden = false;
  document.addEventListener('keydown', function (event) {
    var target = event.target;
    if (event.ctrlKey || event.metaKey || event.altKey || event.isComposing) return;
    if (target && (target.matches('input, textarea, select') || target.isContentEditable)) return;
    if (event.key === '/' && searchInput) {
      event.preventDefault();
      searchInput.focus({ preventScroll: true });
      searchInput.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        block: 'center'
      });
    }
  });

  // Allow keyboard users to scroll wide code examples without scrolling the page.
  document.querySelectorAll('.post-body pre').forEach(function (pre) {
    pre.tabIndex = 0;
  });

  // Don't let the third-party discussion embed delay or interrupt reading.
  var commentsButton = document.querySelector('.comments-load');
  if (commentsButton) {
    var commentsStatus = document.querySelector('.comments-status');
    commentsButton.hidden = false;
    commentsButton.addEventListener('click', function () {
      commentsButton.disabled = true;
      commentsStatus.textContent = 'Caricamento dei commenti…';
      window.disqus_config = function () {
        this.page.url = commentsButton.dataset.pageUrl;
        this.callbacks.onReady = [function () {
          commentsButton.hidden = true;
          commentsStatus.textContent = '';
        }];
      };
      var script = document.createElement('script');
      script.src = 'https://blasterhome.disqus.com/embed.js';
      script.async = true;
      script.onerror = function () {
        commentsButton.disabled = false;
        commentsStatus.textContent = 'Disqus non è disponibile. Puoi riprovare caricando i commenti.';
        script.remove();
      };
      document.head.appendChild(script);
    });
  }

  // The official webring owns its links. Only its presentation is adapted here.
  // CSS variables inherit through the shadow root, so both themes update instantly.
  var webringStyles = `
    :host { font-family: var(--sans); color: var(--ink); font-size: 16px; }
    .webring-banner { max-width: none; background: transparent; color: var(--ink); border: 1px solid var(--line-strong); border-radius: 0; box-shadow: none; }
    .webring-banner a { color: var(--accent); text-underline-offset: .2em; }
    .webring-banner a:hover, .webring-banner a:focus { color: var(--accent); }
    .webring-banner a:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
    .webring-banner__header { padding: 1.4rem; border-bottom: 1px solid var(--line); }
    .webring-banner__image { display: none; }
    .webring-banner__description { padding-right: 1.5rem; min-width: 0; line-height: 1.7; }
    .webring-banner__description span { color: var(--muted); font-size: .75rem; }
    .webring-banner__title { font: 400 1.55rem/1.3 var(--display); margin: .4rem 0 .5rem; overflow-wrap: anywhere; }
    .webring-banner__title a { color: var(--ink); }
    .webring-banner__info { color: var(--muted); border: 1px solid var(--line); border-radius: 0; width: 28px; height: 28px; font: .75rem/1 var(--mono); align-items: center; top: .7rem; right: .7rem; }
    .webring-banner__links { padding: .8rem 1rem; gap: .25rem .75rem; }
    .webring-banner__link { min-width: 0; padding-block: .4rem; font: .7rem/1.5 var(--mono); }
  `;
  if (window.customElements) {
    customElements.whenDefined('webring-banner').then(function () {
      document.querySelectorAll('webring-banner').forEach(function (ring) {
        if (!ring.shadowRoot || ring.shadowRoot.querySelector('[data-blog-style]')) return;
        var style = document.createElement('style');
        style.dataset.blogStyle = '';
        style.textContent = webringStyles;
        ring.shadowRoot.appendChild(style);
        var labels = [
          ['.webring-banner__link--prev', '← Precedente'],
          ['.webring-banner__link--random', 'A caso'],
          ['.webring-banner__link--next', 'Successivo →']
        ];
        labels.forEach(function (item) {
          var link = ring.shadowRoot.querySelector(item[0]);
          if (link) {
            link.textContent = item[1];
            // Use the visible Italian text, not the embed's English accessible name.
            link.removeAttribute('aria-label');
          }
        });
      });
    });
  }
})();
