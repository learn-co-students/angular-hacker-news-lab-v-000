function PostController(story) {
  var postCtrl = this;
  postCtrl.story = story.data;

}


angular
    .module('app')
    .controller('PostController', PostController);
