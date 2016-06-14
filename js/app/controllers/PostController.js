function PostController(post){
  var ctrl = this;
  this.data = post.data
}

angular
  .module('app')
  .controller('PostController', PostController);