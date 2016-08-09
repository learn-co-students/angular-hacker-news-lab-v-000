function TopStoriesController(PostsService) {
  
  var ctrl = this;

  PostsService
    .getPosts()
    .then(function(res) {
      ctrl.posts = res.data; // array of ids
      ctrl.articles = []
      ctrl.posts.forEach(function(id) {
        ctrl.articles.push(PostsService.getPost(id).then(function(res) {res.data}));
        // console.log(Number(id));
      });
    });
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);