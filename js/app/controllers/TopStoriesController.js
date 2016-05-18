function TopStoriesController (topStories) {
  this.topStories = topStories;
}

TopStoriesController.$inject = [];

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);
