function TopStoriesController(top) {
  var ctrl = this;
  ctrl.topStories = top.data;
  console.log(ctrl.topStories);
  ctrl.currentPage = 0;
  ctrl.pagedFiltered = [];
  ctrl.pagedItem = function() {
    if( ctrl.currentPage < ctrl.topStories.length) {
      ctrl.pagedFiltered = ctrl.topStories.slice(ctrl.currentPage, ctrl.currentPage + 30);
      ctrl.currentPage += 30;
    }else{
      ctrl.currentPage = 0;
      ctrl.pagedFiltered = [];
    }
  };
  ctrl.pagedItem();
  console.log(ctrl.pagedFiltered);

}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController)
