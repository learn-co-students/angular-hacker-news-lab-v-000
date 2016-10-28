function PostController(post) {
  debugger
  var vm      = this;
  vm.author   = post.by;
  vm.title    = post.title;
  vm.url      = post.url;
  vm.comments = post.kids;

  vm.call     = function() {
    alert("Bang!");
  }
}

angular
  .module('app')
  .controller('PostController', PostController);