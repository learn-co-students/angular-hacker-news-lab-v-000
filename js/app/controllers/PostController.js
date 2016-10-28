function PostController(post) {
  this.comments = post.comments;

  this.call = function() {
    alert("Bang!");
  }
}

angular
  .module('app')
  .controller('PostController', PostController);