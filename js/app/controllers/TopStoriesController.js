function TopStoriesController(posts) {
  this.data = posts.data;
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);
