function PostsContoller(PostsService) {
  var ctrl = this;

  ctrl.posts = '';

  PostsService
    .getTopStories()
    .then(function (data) {
      console.log(data);
    });
}


angular
  .module('app')
  .controller('PostsContoller', PostsContoller)
