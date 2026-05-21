(function () {
  'use strict';

  var STORAGE_KEY = 'gtb-theme';
  var root = document.documentElement;

  /* ---------- live clock ---------- */
  var clockEl = document.getElementById('sb-clock');
  function tickClock() {
    if (!clockEl) return;
    var d = new Date();
    var hh = String(d.getHours()).padStart(2, '0');
    var mm = String(d.getMinutes()).padStart(2, '0');
    clockEl.textContent = hh + ':' + mm;
  }
  tickClock();
  // align next tick to the start of the next minute
  var msToNextMinute = (60 - new Date().getSeconds()) * 1000;
  setTimeout(function () {
    tickClock();
    setInterval(tickClock, 60 * 1000);
  }, msToNextMinute);

  /* ---------- theme toggle ---------- */
  var toggle = document.getElementById('sb-theme-toggle');
  if (!toggle) return;

  var iconEl = toggle.querySelector('.sb-theme-icon');
  var labelEl = toggle.querySelector('.sb-theme-label');

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    if (iconEl) iconEl.textContent = theme === 'dark' ? '☾' : '☀';
    if (labelEl) labelEl.textContent = theme;
    toggle.setAttribute('aria-label', theme === 'dark' ? 'Passa al tema chiaro' : 'Passa al tema scuro');
  }

  apply(root.getAttribute('data-theme') || 'light');

  toggle.addEventListener('click', function () {
    var current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    apply(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch (_) {}
  });

  // follow system theme if user hasn't picked one yet
  if (window.matchMedia) {
    var mql = window.matchMedia('(prefers-color-scheme: dark)');
    var listener = function (e) {
      try {
        if (localStorage.getItem(STORAGE_KEY)) return;
      } catch (_) { return; }
      apply(e.matches ? 'dark' : 'light');
    };
    if (mql.addEventListener) mql.addEventListener('change', listener);
    else if (mql.addListener) mql.addListener(listener);
  }

  /* ---------- global keybindings ---------- */
  function inEditable(t) {
    return t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable);
  }

  document.addEventListener('keydown', function (e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (inEditable(e.target)) return;

    // "/" focuses the search (vim-style)
    if (e.key === '/') {
      var input = document.querySelector('.search-form input[name="query"]');
      if (!input) return;
      e.preventDefault();
      input.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(function () { input.focus(); }, 200);
      return;
    }

    // 1..4 jump to the corresponding workspace
    if (e.key >= '1' && e.key <= '4') {
      var idx = parseInt(e.key, 10) - 1;
      var ws = document.querySelectorAll('.ws-group a.ws')[idx];
      if (!ws) return;
      e.preventDefault();
      window.location.href = ws.href;
    }
  });

  /* ---------- reading progress (post / link pages) ---------- */
  var progress = document.getElementById('sb-progress');
  if (progress) {
    var pctEl = progress.querySelector('.sb-progress-pct');
    var ticking = false;
    function updateProgress() {
      var doc = document.documentElement;
      var max = (doc.scrollHeight - window.innerHeight) || 1;
      var pct = Math.min(100, Math.max(0, (window.scrollY / max) * 100));
      progress.style.setProperty('--progress', pct.toFixed(1) + '%');
      if (pctEl) pctEl.textContent = Math.round(pct) + '%';
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { requestAnimationFrame(updateProgress); ticking = true; }
    }, { passive: true });
    window.addEventListener('resize', function () {
      if (!ticking) { requestAnimationFrame(updateProgress); ticking = true; }
    }, { passive: true });
    updateProgress();
  }

  /* ---------- restyle the retronerds webring (shadow DOM) ---------- */
  var WEBRING_OVERRIDES = [
    ':host { font-family: var(--mono); color: var(--ink-dim); }',
    '.webring-banner {',
    '  background-color: var(--panel) !important;',
    '  border: 1px solid var(--panel-border) !important;',
    '  border-radius: 14px !important;',
    '  box-shadow: none !important;',
    '  max-width: 100% !important;',
    '  color: var(--ink-dim);',
    '}',
    '.webring-banner a { color: var(--magenta) !important; }',
    '.webring-banner a:hover, .webring-banner a:focus { color: var(--magenta-deep) !important; }',
    '.webring-banner__header {',
    '  border-bottom-color: var(--panel-border) !important;',
    '  padding: 12px 14px !important;',
    '}',
    '.webring-banner__title {',
    '  font-family: var(--display);',
    '  font-size: 1rem;',
    '  font-weight: 400;',
    '  letter-spacing: 0.02em;',
    '}',
    '.webring-banner__description { color: var(--ink-dim); font-size: 0.8rem; }',
    '.webring-banner__description span { color: var(--ink-faint); }',
    '.webring-banner__info {',
    '  color: var(--ink-faint) !important;',
    '  border-color: var(--panel-border) !important;',
    '}',
    '.webring-banner__image {',
    '  width: 40px !important; height: 40px !important;',
    '  opacity: 0.8;',
    '  filter: saturate(0.8);',
    '}',
    '.webring-banner__links { padding: 10px 14px !important; }',
    '.webring-banner__link {',
    '  color: var(--magenta) !important;',
    '  font-family: var(--mono);',
    '  font-size: 0.78rem;',
    '}'
  ].join('\n');

  function styleWebring() {
    if (!window.customElements || !customElements.whenDefined) return;
    customElements.whenDefined('webring-banner').then(function () {
      var rings = document.querySelectorAll('webring-banner');
      for (var i = 0; i < rings.length; i++) {
        var el = rings[i];
        if (el.dataset.gtbStyled || !el.shadowRoot) continue;
        var s = document.createElement('style');
        s.textContent = WEBRING_OVERRIDES;
        el.shadowRoot.appendChild(s);
        el.dataset.gtbStyled = '1';
      }
    });
  }

  // The embed script is async; try at DOM ready and again at full load.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', styleWebring);
  } else {
    styleWebring();
  }
  window.addEventListener('load', styleWebring);
})();
