function TopStoriesController (posts) {

  this.posts = posts;
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);