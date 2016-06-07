function PostController(posts) {
  this.posts = posts.data;

}

angular
  .module('app')
  .controller('PostController', PostController);
