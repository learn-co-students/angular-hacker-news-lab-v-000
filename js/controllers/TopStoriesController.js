function TopStoriesController(PostService, PostsService) {
  var ctrl = this;

  ctrl.posts = [];

  ctrl.completePosts = [];

  ctrl.getPostData = function() {
    ctrl.posts.forEach(function(post) {
      PostService
        .getSinglePost(post)
        .then(function(res) {
          ctrl.completePosts.push(res.data);
        })
    });
  }

  ctrl.getPostData();

  PostsService
    .getAllPosts()
    .then(function(res) {
      ctrl.posts = res.data;
    });
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);