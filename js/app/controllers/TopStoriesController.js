function TopStoriesController(PostsService) {
  
  var ctrl = this;

  PostsService
    .getPosts()
    .then(function(res) {
      ctrl.posts = res.data;
    });
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);