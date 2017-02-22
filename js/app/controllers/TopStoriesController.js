const POSTS_LIMIT = 30;

function TopStoriesController(topStories) {
  var ctrl = this;

  ctrl.page = 0;
  ctrl.totalPosts = topStories.data.length;
  ctrl.totalPages = Math.ceil(ctrl.totalPosts / POSTS_LIMIT);

  ctrl.paginatePosts = function() {
    ctrl.topStories = topStories.data.slice(ctrl.page * POSTS_LIMIT, (ctrl.page + 1) * POSTS_LIMIT);
    ctrl.currentPage = ctrl.page + 1;
  };

  ctrl.nextPage = function() {
    ctrl.page++;
    ctrl.paginatePosts();
  };
  
  ctrl.previousPage = function() {
    ctrl.page--;
    ctrl.paginatePosts();
  };

  ctrl.paginatePosts();
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);