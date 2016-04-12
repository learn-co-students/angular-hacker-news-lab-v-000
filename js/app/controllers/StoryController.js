function StoryController(story) {
   this.data = story.data;
  //debugger;
}

angular
  .module('app')
  .controller('StoryController', StoryController);