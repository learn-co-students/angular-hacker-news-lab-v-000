function PostController() {
  var ctrl = this;

  PostService
    .getAllPosts()
    .then(function(res) {
      ctrl.posts = res.data;
    });
}

PostController.$inject = ['$scope', PostService]

angular
  .module('app')
  .controller('PostController', PostController);