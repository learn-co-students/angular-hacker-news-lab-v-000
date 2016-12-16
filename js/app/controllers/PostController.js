function PostController(post) {
  var vm = this;
	vm.data = post.data;
  // Instead of injecting $scope into every controller,
  // we can simply just use the this (vm) keyword and assign items to that instead.
}

angular
	.module('app')
	.controller('postController', PostController);
