function StoryController(story) {
  var ctrl = this;
  ctrl.data = story.data;
}

angular
  .module('app')
  .controller('StoryController', StoryController);
