angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    select: '<',
    index: '<'
  },
  templateUrl: 'src/templates/videoListEntry.html'
});
