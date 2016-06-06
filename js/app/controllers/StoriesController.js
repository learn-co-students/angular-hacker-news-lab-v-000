function StoriesController(stories) {
  var ctrl = this;
  ctrl.stories = stories.data;
  ctrl.thirtyStories = [];
  ctrl.currentPage = 1;

  ctrl.getStoriesByPage = function(currentPage){
    var startingIndex;

    if(currentPage === 1){
      startingIndex = 0;
    } else {
      startingIndex = (30 * (currentPage - 1) - 1);
    };
    ctrl.thirtyStories = ctrl.stories.slice(startingIndex, startingIndex + 31);
  }

  ctrl.changePage = function(newPage){
    ctrl.currentPage = newPage;
    ctrl.getStoriesByPage(ctrl.currentPage);
  }
  
  ctrl.getStoriesByPage(ctrl.currentPage);

}

StoriesController.$inject = ['stories'];

angular
  .module('app')
  .controller('StoriesController', StoriesController)