function PostController(post) {
  var vm = this;
  vm.post = post.data;
}

angular
  .module('app')
  .controller('PostController', PostController);