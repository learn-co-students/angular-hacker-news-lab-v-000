function StoriesController(story){
  var this.data = story.data;
}

angular
  .module('app')
  .controller('StoriesController', StoriesController)
