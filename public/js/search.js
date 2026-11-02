(function () {
  'use strict';
  var query = new URLSearchParams(window.location.search).get('query');
  var summary = document.getElementById('search-summary');
  var resultsList = document.getElementById('search-results');
  var input = document.getElementById('footer-query');
  if (!query || !query.trim()) return;
  query = query.trim();
  if (input) input.value = query;

  try {
    var index = lunr(function () {
      this.ref('id');
      this.field('title', { boost: 10 });
      this.field('content');
      Object.keys(window.store).forEach(function (key) {
        this.add({ id: key, title: window.store[key].title, content: window.store[key].content });
      }, this);
    });
    var results;
    try {
      results = index.search(query);
    } catch (error) {
      if (!(error instanceof lunr.QueryParseError)) throw error;
      // Treat malformed advanced syntax as plain words rather than breaking search.
      results = index.query(function (builder) {
        builder.term(lunr.tokenizer(query).map(function (token) { return token.toString(); }));
      });
    }
    summary.textContent = results.length ? results.length + ' risultati per «' + query + '».' : 'Nessun risultato per «' + query + '». Prova con un’altra parola.';
    var fragment = document.createDocumentFragment();
    results.forEach(function (result) {
      var item = window.store[result.ref];
      var li = document.createElement('li');
      li.lang = item.lang;
      var heading = document.createElement('h2');
      var link = document.createElement('a');
      link.href = item.url;
      link.textContent = item.title;
      heading.appendChild(link);
      var excerpt = document.createElement('p');
      excerpt.textContent = item.content.slice(0, 180) + (item.content.length > 180 ? '…' : '');
      li.appendChild(heading);
      li.appendChild(excerpt);
      fragment.appendChild(li);
    });
    resultsList.replaceChildren(fragment);
  } catch (_) {
    summary.textContent = 'Non è stato possibile completare la ricerca. Riprova tra poco o sfoglia il blog dalla home.';
  }
})();
