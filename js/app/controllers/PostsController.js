function PostsController(PostsService){
  var ctrl = this;

  ctrl.posts = '';

  PostsService
    .getTopStories()
    .then(function (res) {
      console.log(res);
    });
}

angular
  .module('app')
  .controller('PostsController', PostsController);