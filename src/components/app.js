const DEFAULT_QUERY = 'cat';

angular.module('video-player')

.component('app', {
  controller: function(youTube) {    
    this.youTube = youTube;
    this.videos = [];
    this.currentVideo = {};

    this.selectVideo = (video) => {
      // assign current video of app
      this.currentVideo = video;

      if (Object.keys(video).length) {
        // if video is not empty object, get additional details for current video
        this.youTube.fetchDetails(this.currentVideo, this.extendVideo.bind(this));
      }
    };

    this.extendVideo = (basicVideo, detailedVideo) => {
      // add additional statistics to original video object
      basicVideo.statistics = detailedVideo.statistics;
    };

    // store videos in app
    this.searchResults = (videos) => {
      this.videos = videos;
      // select first video, or empty object if videos array is empty
      this.selectVideo(videos.length ? videos[0] : {});
    };

    // search for default query at initialization
    this.youTube.search(DEFAULT_QUERY, this.searchResults.bind(this));
  },
  templateUrl: 'src/templates/app.html'
});
