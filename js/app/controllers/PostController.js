function PostController(story, DateService) {
  this.story = story;

  function activate(){
    story.time = DateService.unixTimeConverter(story.time);
  }

  activate();
}

angular
  .module('app')
  .controller('PostController', PostController);