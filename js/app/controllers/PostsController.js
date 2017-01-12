function PostsController(post) {
  var ctrl = this;

  ctrl.data = post.data;
  console.log(post.data.url);
}

angular
    .module('app')
    .controller('PostsController', PostsController)
