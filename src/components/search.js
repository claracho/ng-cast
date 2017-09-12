angular.module('video-player')

.component('search', {
  bindings: {
    result: '<'
  },
  controller: function(youTube) {
    this.searchResult = (query) => {
      youTube.search(query, this.result);
    };
  },
  templateUrl: 'src/templates/search.html'
});
