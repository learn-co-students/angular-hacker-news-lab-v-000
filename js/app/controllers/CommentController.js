function CommentController(comment) {
  debugger
  var vm      = this;

  vm.call     = function() {
    debugger
    alert("Bang!");
  }
}

angular
  .module('app')
  .controller('CommentController', CommentController);