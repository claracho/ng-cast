angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    onClick: '<',
    toggleAutoPlay: '<',
    nextAutoPlay: '<'
  },
  templateUrl: 'src/templates/videoList.html'
});
