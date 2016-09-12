function PostStoriesController(post) {
  this.data = post.data;
}

angular
  .module('app')
  .controller('PostStoriesController', PostStoriesController);
