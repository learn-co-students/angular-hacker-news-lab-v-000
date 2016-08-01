function StoryController($stateParams, StoryService) {
  var ctrl = this;

  StoryService
    .getStory($stateParams.id)
    .then(function(res) {
      debugger;
    })

}

angular
  .module('app')
  .controller('StoryController', StoryController);
