function TopStoriesController(PostsService) {
  
  var ctrl = this;

  ctrl.sliceStart = 0;
  ctrl.sliceEnd = 30;

  PostsService
    .getPosts()
    .then(function(res) {
      ctrl.posts = res.data;
      ctrl.articles = [];
      ctrl.posts.slice(ctrl.sliceStart, ctrl.sliceEnd).forEach(function(id) {
        PostsService.getPost(id).then(function(res) {
          ctrl.articles.push(res.data);
        });
      });
    });
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);