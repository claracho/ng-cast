const DEFAULT_QUERY = 'cat';

angular.module('video-player')

.component('app', {
  controller: function(youTube) {    
    this.videos = [];
    this.currentVideo = {};
    this.selectVideo = (video) => {
      this.currentVideo = video;
    };
    this.searchResults = (videos) => {
      this.videos = videos;
      this.currentVideo = videos.length ? videos[0] : {};
    };
    this.youTube = youTube;
    this.youTube.search(DEFAULT_QUERY, this.searchResults.bind(this));
  },
  templateUrl: 'src/templates/app.html'
});
