function TopStoryController (story){
  var ctrl = this;

  ctrl.page = 0;
  ctrl.storyPerPage = 30;
  ctrl.totalStories = story.data.length;
  ctrl.totalPages = Math.ceil(ctrl.totalStories / ctrl.storyPerPage);

  ctrl.getStories = function (){
    var first = ctrl.page * ctrl.storyPerPage;
    var selectPage = first + ctrl.storyPerPage;
    ctrl.currentPage = story.data.slice(first, selectPage);
  };

  ctrl.nextPage = function (){
    ctrl.page++;
    ctrl.getStories();
  };

  ctrl.previousPage = function(){
    ctrl.page--;
    ctrl.getStories();
  };

  ctrl.getStories();
}

angular
  .module('app')
  .controller('TopStoryController', TopStoryController)