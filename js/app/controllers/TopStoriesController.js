function TopStoriesController(TopStoriesService) {
  console.log("TopStoriesController.js");
  var ctrl = this;
  ctrl.topStories = [];
  ctrl.stories = [];
  ctrl.currentPage = 0;

  ctrl.populateTopStories = function() {
    topStories = TopStoriesService.getTopStories().then(function(results) {
      ctrl.topStories = results.data;
      ctrl.totalPosts = ctrl.topStories.length;
      ctrl.pages = Math.ceil(ctrl.totalPosts / 30);
      ctrl.paginate();
    });
  };

  ctrl.paginate = function(){
    var start = ctrl.currentPage * 30;
    var end = start + 30;
    ctrl.stories = ctrl.topStories.slice(start, end);
  };

  ctrl.nextPage = function(){
    if(ctrl.currentPage < ctrl.pages){
      ctrl.currentPage++;
      ctrl.paginate();
    }
  };

  ctrl.previousPage = function(){
    if(ctrl.currentPage > 0){
      ctrl.currentPage--;
      ctrl.paginate();
    }
  };

  ctrl.populateTopStories();
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);

