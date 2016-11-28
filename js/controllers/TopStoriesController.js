function TopStoriesController(PostService) {
  var ctrl = this;

  ctrl.posts = function() {
    PostService
      .getAllPosts()
      .then(function(res) {
        console.log(res);
      });
  };

  ctrl.post = function(id) {
    PostService
    .getSinglePost(id)
    .then(function(res) {
      console.log(res);
    });
  };

}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);