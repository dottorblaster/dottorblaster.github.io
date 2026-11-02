const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { test } = require('node:test');
const { runInNewContext } = require('node:vm');

const source = readFileSync(join(__dirname, '../public/js/search.js'), 'utf8');

function element() {
  return {
    textContent: '',
    children: [],
    appendChild(child) { this.children.push(child); },
    replaceChildren(fragment) { this.children = fragment.children; }
  };
}

// Stub only indexing and the DOM: run the actual result-rendering script.
function renderResults(count) {
  const nodes = {
    'search-summary': element(),
    'search-results': element(),
    'footer-query': element()
  };
  const results = Array.from({ length: count }, (_, i) => ({ ref: String(i) }));
  const store = Object.fromEntries(results.map(({ ref }) => [ref, {
    title: 'Post ' + ref,
    content: 'Un esempio di contenuto.',
    url: '/post-' + ref + '/',
    lang: 'it'
  }]));
  runInNewContext(source, {
    URLSearchParams,
    window: { location: { search: '?query=linux' }, store },
    document: {
      getElementById: id => nodes[id],
      createElement: element,
      createDocumentFragment: element
    },
    lunr: () => ({ search: () => results })
  });
  return nodes;
}

for (const [count, expected] of [
  [0, 'Nessun risultato per «linux». Prova con un’altra parola.'],
  [1, '1 risultato per «linux».'],
  [2, '2 risultati per «linux».']
]) {
  test(`search summary uses natural Italian for ${count} results`, () => {
    const nodes = renderResults(count);
    assert.equal(nodes['search-summary'].textContent, expected);
    assert.equal(nodes['search-results'].children.length, count);
    assert.equal(nodes['footer-query'].value, 'linux');
  });
}
