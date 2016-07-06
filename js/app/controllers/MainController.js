function MainController(DataService) {

  ctrl = this;

  ctrl.storyIdArray = [];

  DataService.getStoryIds()
  .then(function(result){
    ctrl.storyIdArray = result.data
  });


};

angular
  .module('app')
  .controller('MainController', MainController);
