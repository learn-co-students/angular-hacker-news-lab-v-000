function PostController(post) {
  var ctrl = this;
  ctrl.data = post.data;
  console.log(ctrl.data);
  console.log('this is a t')
}

angular
  .module('app')
  .controller('PostController', PostController);
