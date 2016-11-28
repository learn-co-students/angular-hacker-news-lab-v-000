function TopStoriesController (topstories) {
	var ctrl = this;
	ctrl.topstories = topstories;

  ctrl.startingStoryNumber = 0;
  ctrl.pageSize = 30;
}
angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);
