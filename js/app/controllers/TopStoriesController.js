function TopStoriesController (topstories) {
  var ctrl = this;
	ctrl.topstories = topstories;

}
angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);
