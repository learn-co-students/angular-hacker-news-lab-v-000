function TopStoriesController(stories){
  var ctrl = this;
  ctrl.stories = stories.data;
  ctrl.page = 0;

  ctrl.populatePage = function(){
    ctrl.currentPageData = ctrl.stories.slice(ctrl.page * 30, ctrl.page * 30 + 30);
  }

  ctrl.nextPage = function(){
    if(ctrl.page < ctrl.stories.length/30){
      ctrl.page++;
      ctrl.populatePage();
    }
  }

  ctrl.previousPage = function(){
    if (ctrl.page > 0){
      ctrl.page--;
      ctrl.populatePage();
    }
  }

  ctrl.populatePage();
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);