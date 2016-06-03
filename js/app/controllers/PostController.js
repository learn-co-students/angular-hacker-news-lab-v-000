function PostController(post){
  var ctrl = this;
  this.data = post.data
  console.log(post.data);
}

angular
  .module('app')
  .controller('PostController', PostController);
