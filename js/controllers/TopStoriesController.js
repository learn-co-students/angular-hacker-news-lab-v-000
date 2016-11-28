function TopStoriesController(posts) {
  var ctrl = this;

  ctrl.posts = posts.data
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);