function TopStoriesController() {
  var ctrl = this;

  PostService
    .getAllPosts()
    .then(function(res) {
      ctrl.posts = res.data;
    });
}

TopStoriesController.$inject = ['$scope', PostService]

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);