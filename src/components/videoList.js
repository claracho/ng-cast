angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    select: '<'
  },
  templateUrl: 'src/templates/videoList.html'
});
