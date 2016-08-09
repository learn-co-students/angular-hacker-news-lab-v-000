function TopStoriesController(PostsService) {
  
  var ctrl = this;

  PostsService
    .getPosts()
    .then(function(res) {
      ctrl.posts = res.data;
      ctrl.articles = [];
      ctrl.posts.forEach(function(id) {
        PostsService.getPost(id).then(function(res) {
          ctrl.articles.push(res.data);
        });
      });
    });
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);