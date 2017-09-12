angular.module('video-player')

.component('search', {
  bindings: {
    result: '<',
    service: '<'
  },
  controller: function() {
    this.searchResult = (query) => {
      this.service.search(query, this.result);
    };

    // invoke searchResult immediately
    this.immediateSearchResult = (query, event) => {
      if (event.type === 'click' || event.keyCode === 13) {
        this.searchResult(query);
      }
    };

    // create debounced version of searchResult
    this.debouncedSearchResult = _.debounce(this.searchResult.bind(this), 500);
  },
  templateUrl: 'src/templates/search.html'
});
