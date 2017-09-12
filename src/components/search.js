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
    this.searchResult = _.debounce(this.searchResult.bind(this), 500);
  },
  templateUrl: 'src/templates/search.html'
});
