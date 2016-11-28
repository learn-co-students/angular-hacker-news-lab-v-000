function TopStoriesController(PostService, PostsService) {
  var ctrl = this;

  ctrl.posts = [];

  PostsService
    .getAllPosts()
    .then(function(res) {
      ctrl.posts = res.data;
      console.log(res.data);
    });

  // PostService
  //   .getSinglePost(id)
  //   .then(function(res) {
  //     ctrl.post = res.data;
  //     console.log(res.data);
  //   })

}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);