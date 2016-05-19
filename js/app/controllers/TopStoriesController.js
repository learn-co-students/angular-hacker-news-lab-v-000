function TopStoriesController (posts) {
  this.posts = posts.data;
  debugger;
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);
