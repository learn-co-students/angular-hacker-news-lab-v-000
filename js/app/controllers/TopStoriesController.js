function TopStoriesController(PostsService) {
  
  var ctrl = this;

  ctrl.start = 0;
  ctrl.end = 30;


  PostsService
    .getPosts()
    .then(function(res) {
      ctrl.posts = res.data;
      ctrl.articles = [];
      ctrl.posts.slice(ctrl.start, ctrl.end).forEach(function(id) {
        PostsService.getPost(id).then(function(res) {
          ctrl.articles.push(res.data);
        });
      });
    });
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);