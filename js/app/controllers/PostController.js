function PostController(post) {
  var vm      = this;
  vm.data     = post;
}

angular
  .module('app')
  .controller('PostController', PostController);