const YOUTUBE_SEARCH_API_SERVER = 'https://www.googleapis.com/youtube/v3/search';
const YOUTUBE_VIDEOS_API_SERVER = 'https://www.googleapis.com/youtube/v3/videos';

angular.module('video-player')
.service('youTube', function($http) {
  this.search = function(str, callback) {
    let params = {
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
      params: params
    })
    .then(function(response) {
      callback(response.data.items);
    }, function() {
      console.error('Failed to fetch data from YouTube');
    });
  };

  this.fetchDetails = function(video, callback) {
    let videoId = video.id.videoId;
    let params = {
      id: videoId,
      key: window.YOUTUBE_API_KEY,
      part: 'snippet,statistics'
    };

    return $http({
      method: 'GET',
      url: YOUTUBE_VIDEOS_API_SERVER,
      params: params
    })
    .then(function(response) { 
      callback(video, response.data.items[0]);  
    }, function() {
      console.error('Failed to fetch data from YouTube');
    });
  };
});
