function TopStoriesController(StoryService) {
  var ctrl = this;
  ctrl.posts = [];

  StoryService
    .getTopStories()
    .then(function(res) {
      debugger;
    });

}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);
