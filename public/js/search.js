(function() {
	function displaySearchResults(results, store) {
		var searchResults = document.getElementById('search-results'),
			appendString = '',
			item;
		
		if (!results.length) { return searchResults.innerHTML = '<li>No results found</li>'; }

		for (var i = 0; i < results.length; i++) {  // Iterate over the results
			item = store[results[i].ref];
			appendString += '<li><a href="' + item.url + '"><h3>' + item.title + '</h3></a>';
			appendString += '<p>' + item.content.substring(0, 150) + '[...]</p></li>';
		}

		searchResults.innerHTML = appendString;
	}

	function getQueryVariable(variable) {
		var query = window.location.search.substring(1);
		var vars = query.split('&');

		for (var i = 0; i < vars.length; i++) {
			var pair = vars[i].split('=');

			if (pair[0] === variable) {
				return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
			}
		}
	}

	var searchTerm = getQueryVariable('query'), results = [];

	if (searchTerm) {
		document.getElementById('search-box').setAttribute("value", searchTerm);

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