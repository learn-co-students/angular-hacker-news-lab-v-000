function TopStoriesController(TopStoriesService) {
  console.log("TopStoriesController.js");
  var ctrl = this;
  ctrl.topStories = [];
  ctrl.stories = [];
  ctrl.currentPage = 0;
  ctrl.totalPosts = ctrl.topStories.length;
  ctrl.pages = Math.ceil(ctrl.totalPosts / 30);

  ctrl.populateTopStories = function() {
    topStories = TopStoriesService.getTopStories().then(function(results) {
      ctrl.topStories = results.data;
    });
  };

  ctrl.paginate = function(){
    var start = ctrl.currentPage * 30;
    var end = start + 30;
    ctrl.stories = ctrl.topStories.slice(start, end);
  };

  ctrl.nextPage = function(){
    //are we on the last page?
    //-yes-do nothing
    //-no-increment currentPage, call Paginate again.
  };

  ctrl.previousPage = function(){
    //are we on the first page?
    //-yes-do nothing
    //-no-decrement currentPage, call Paginate again.
  };



  ctrl.populateTopStories();
  ctrl.paginate();
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);

