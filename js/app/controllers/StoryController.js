function StoryController(story){
  var storyCtrl = this;
  storyCtrl.story = story.data;
}

angular
  .module('app')
  .controller('StoryController', StoryController);