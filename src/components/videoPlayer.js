angular.module('video-player')
.component('videoPlayer', {
  bindings: {
    video: '<',
    currentAutoPlay: '<'
  },
  templateUrl: 'src/templates/videoPlayer.html'
});
