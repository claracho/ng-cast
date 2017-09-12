const YOUTUBE_SEARCH_API_SERVER = 'https://www.googleapis.com/youtube/v3/search';

angular.module('video-player')
.service('youTube', function($http) {
  this.search = function(str, callback) {
    let data = {
      q: str,
      key: window.YOUTUBE_API_KEY,
      maxResults: 5,
      videoEmbeddable: 'true',
      type: 'video',
      part: 'snippet'
    };
    
    return $http({
      method: 'GET',
      url: YOUTUBE_SEARCH_API_SERVER,
      params: data
    })
    .then(function(response) {
      callback(response.data.items);
    }, function() {
      console.error('Failed to fetch data from YouTube');
    });
  };
});
