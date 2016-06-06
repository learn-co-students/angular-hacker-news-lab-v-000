function PostController(post){
  var ctrl = this;
  ctrl.post = post.data;
}

PostController.$inject = ['post'];

angular
  .module('app')
  .controller('PostController', PostController)