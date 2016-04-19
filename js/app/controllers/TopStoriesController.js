function TopStoriesController(TopStoriesService) {
  console.log("TopStoriesController.js");
  var ctrl = this;
  ctrl.topStories = [];

  this.populateTopStories = function() {
    topStories = TopStoriesService.getTopStories().then(function(results) {
      ctrl.topStories = results.data;
    });
  };

  this.populateTopStories();
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);

