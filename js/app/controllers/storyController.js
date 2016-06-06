function StoryController(story){
  ctrl = this;

  ctrl.story = story.data;


}

angular
  .module('app')
  .controller('StoryController', StoryController);

