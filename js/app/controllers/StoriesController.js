function StoriesController(StoryService) {
  var ctrl = this;
  ctrl.stories = [];
  ctrl.thirtyStories = [];
  ctrl.currentPage = 1;

  StoryService
    .getStories()
    .then(function (res){
    ctrl.stories = res.data;
    ctrl.getStoriesByPage(ctrl.currentPage);
  });

  ctrl.getStoriesByPage = function(currentPage){
    var startingIndex;

    if(currentPage === 1){
      startingIndex = 0;
    } else {
      startingIndex = (30 * (currentPage - 1) - 1);
    };

    ctrl.thirtyStories = ctrl.stories.splice(startingIndex, 30);
    debugger;
  }

}

StoriesController.$inject = ['StoryService'];

angular
  .module('app')
  .controller('StoriesController', StoriesController)