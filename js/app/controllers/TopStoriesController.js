function TopStoriesController(stories){
  var ctrl = this;
  ctrl.stories = stories.data
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);