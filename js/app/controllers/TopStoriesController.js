function TopStoriesController (posts) {

  this.posts = posts.data;

}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);