function TopStoriesController (TopStoriesService) {
  var ctrl = this;

  TopStoriesService
    .getStories()
    .then(function(res) {
      debugger;
    })
}
angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);
