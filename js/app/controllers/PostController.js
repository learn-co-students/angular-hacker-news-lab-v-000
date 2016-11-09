function PostController(post){
  var ctrl = this;
  debugger;
  ctrl.post = post.data;
}

angular
  .module('app')
  .controller('PostController', PostController);