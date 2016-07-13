function PostController(post) {

  ctrl = this
  ctrl.story = post.data

};

angular
  .module('app')
  .controller('PostController', PostController);
