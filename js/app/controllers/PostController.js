function PostController(story) {
  this.story = story;
}

angular
  .module('app')
  .controller('PostController', PostController);