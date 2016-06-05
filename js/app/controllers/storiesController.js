function StoriesController(topStories){
  ctrl = this;

  ctrl.topStories = topStories.data;
  debugger

}

angular
  .module('app')
  .controller('StoriesController', StoriesController);