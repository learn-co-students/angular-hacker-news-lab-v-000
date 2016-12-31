function PostController(post) {
  var ctrl = this;
  ctrl.data = post.data;
  console.log(post.data);
}

angular
  .module('app')
  .controller('PostController', PostController);
