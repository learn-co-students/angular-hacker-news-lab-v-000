function StoriesController($scope, topStories){
  ctrl = this;

  ctrl.startPage = 0;
  ctrl.endPage = 31;
  ctrl.totalStories = topStories.data.length;

  ctrl.pageStories = topStories.data.slice(ctrl.startPage, ctrl.endPage);

  ctrl.nextPage = function(){
    ctrl.startPage += 30;
    ctrl.endPage += 30;
    ctrl.pageStories = topStories.data.slice(ctrl.startPage, ctrl.endPage);
  };

  ctrl.prevPage = function(){
    ctrl.startPage -= 30;
    ctrl.endPage -= 30;
    ctrl.pageStories = topStories.data.slice(ctrl.startPage, ctrl.endPage);
  };

}

angular
  .module('app')
  .controller('StoriesController', StoriesController);
