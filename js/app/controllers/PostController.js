function PostController(data) {
  this.data = post.data;
}

angular
  .module('app')
  .controller('postController', PostController)