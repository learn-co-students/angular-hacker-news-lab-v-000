function TopStoriesController (posts) {

  var ctrl = this;

  this.posts = posts.data;

}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);