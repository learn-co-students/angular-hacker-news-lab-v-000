function PostController(post) {
  this.data = post.data;
  debugger;
}

angular
  .module('app')
  .controller('PostController', PostController);