function TopStoriesController(topStories) {
  var ctrl = this;

  ctrl.topStories = topStories.data;
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);
