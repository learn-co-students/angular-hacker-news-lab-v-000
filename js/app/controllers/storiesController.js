function StoriesController(topStories){
  ctrl = this;

  ctrl.topStories = topStories.data;

}

angular
  .module('app')
  .controller('StoriesController', StoriesController);
