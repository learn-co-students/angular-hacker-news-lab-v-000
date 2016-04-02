function StoryController(story){
  this.story = story.data;
}

angular
  .module('app')
  .controller('StoryController', StoryController);