function TopStoriesController(stories) {
  ctrl = this;
  ctrl.stories = stories.data;
}


angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);