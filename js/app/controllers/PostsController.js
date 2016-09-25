function PostsController() {
  var vm = this;

  vm.name = "hello";
}

angular
  .module('app')
  .controller('PostsController', PostsController);