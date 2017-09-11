angular.module('video-player')

.component('app', {
  controller: function() {    
    this.videos = exampleVideoData;
    this.currentVideo = this.videos[0];
    this.select = (index) => {
      this.currentVideo = this.videos[index];
    };
    this.searchResults = function() {};
  },
  templateUrl: 'src/templates/app.html'
});
