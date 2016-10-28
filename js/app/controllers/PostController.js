function PostController(post) {
  debugger
  var vm      = this;
  vm.id       = post.id;
  vm.author   = post.by;
  vm.title    = post.title;
  vm.url      = post.url;
  vm.score    = post.score;
  vm.comments = post.kids;

  vm.call     = function() {
    debugger
    alert("Bang!");
  }
}

angular
  .module('app')
  .controller('PostController', PostController);