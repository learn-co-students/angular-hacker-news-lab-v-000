function PostController(post) {
  var ctrl = this;

  ctrl.data = post.data;

  console.log(ctrl.data);

  ctrl.by = post.data.by;
  ctrl.title = post.data.title;
  ctrl.url = post.data.url;
  ctrl.score = post.data.score;
  ctrl.kids = post.data.kids;
  ctrl.descendants = post.data.descendants;
}

angular
  .module('app')
  .controller('PostController', PostController);