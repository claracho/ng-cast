angular.module('video-player')

.component('app', {
  controller: function() {
    this.videos = [];
    this.currentVideo = {};
    this.selectVideo = function() {};
    this.searchResults = function() {};
  },
  templateUrl: 'src/templates/app.html'
});
