angular.module('video-player')
.component('videoDetails', {
  bindings: {
    video: '<'
  },
  templateUrl: 'src/templates/videoDetails.html'
});
