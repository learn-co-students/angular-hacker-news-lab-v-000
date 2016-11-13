function PostController(posts) {
  var ctrl = this;
  ctrl.posts = posts;
}

angular
  .module('app')
  .controller('PostController', PostController);