function PostController(StoryService) {
  var ctrl = this;
  ctrl.postId= "";
  ctrl.data = {};
  ctrl.on = false;

  ctrl.getPost = function(id) {
    StoryService
    .getStoryJSONById(id)
    .then(function(results) {
      ctrl.data = results.data;
      ctrl.on =  true;
    });
  }
}

angular
  .module('app')
  .controller('PostController', PostController);
