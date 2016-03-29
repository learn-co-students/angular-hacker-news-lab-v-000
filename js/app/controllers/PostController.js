angular
  .module('app')
  .controller('PostController', PostController);

function PostController(post) {
  this.data = post.data;
};
