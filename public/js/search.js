(function() {
	function displaySearchResults(results, store) {
		var searchResults = document.getElementById('search-results'),
			appendString = '',
			item;
		
		if (!results.length) { return searchResults.innerHTML = '<li>No results found</li>'; }

		for (var i = 0; i < results.length; i++) {  // Iterate over the results
			item = store[results[i].ref];
			appendString += '<li><a href="' + item.url + '"><h3>' + item.title + '</h3></a><p>' + item.content.substring(0, 150) + '[...]</p></li>';
		}

		searchResults.innerHTML = appendString;
	}

	function getQueryVariable(q) {
		return new URLSearchParams(window.location.search.substring(1)).get(q);
	}

	var searchTerm = getQueryVariable('query'), results = [];

	if (searchTerm) {
		// Initalize lunr with the fields it will be searching on. I've given title
		// a boost of 10 to indicate matches on this field are more important.
		var idx = lunr(function () {
			this.field('id');
			this.field('title', { boost: 10 });
			this.field('content');
		});

		for (var key in window.store) { // Add the data to lunr
			idx.add({
				'id': key,
				'title': window.store[key].title,
				'content': window.store[key].content
			});
		}

		results = idx.search(searchTerm);
		displaySearchResults(results, window.store);
	}
})();