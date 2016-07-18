function TopStoriesController(top) {
  var ctrl = this;

  ctrl.top = top.data;
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);
