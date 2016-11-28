function PostController(post) {
  var ctrl = this;

  ctrl.post = post.data;

  ctrl.by = post.data.by;
  ctrl.title = post.data.title;
  ctrl.url = post.data.url;
}

angular
  .module('app')
  .controller('PostController', PostController);