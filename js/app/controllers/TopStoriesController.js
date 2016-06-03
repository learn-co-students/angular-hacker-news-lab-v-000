
function TopStoriesController(topStories){
  var STORIES_PER_PAGE = 30;
  var ctrl = this;

  ctrl.page = 0;
  ctrl.totalPosts = topStories.data.length;
  ctrl.totalPages = Math.ceil(ctrl.totalPosts / STORIES_PER_PAGE);

  ctrl.paginatePosts = function(){
    ctrl.topStories = topStories.data.slice(ctrl.page * STORIES_PER_PAGE, (ctrl.page + 1) * STORIES_PER_PAGE );
  }

  ctrl.previousPage = function(){
    ctrl.page--;
    ctrl.paginatePosts();
  }
  ctrl.nextPage = function(){
    ctrl.page++;
    ctrl.paginatePosts();
  }

  ctrl.paginatePosts();

}


angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);
