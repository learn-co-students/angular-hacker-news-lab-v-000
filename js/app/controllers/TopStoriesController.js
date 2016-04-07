var POSTS_PER_PAGE = 30;
function TopStoriesController(posts){
  var ctrl = this;
  ctrl.currentPage = 0;
  ctrl.postsIDs = posts.data;
  ctrl.totalStories = ctrl.postsIDs.length
  ctrl.totalPages = Math.ceil(ctrl.totalStories/POSTS_PER_PAGE);
  ctrl.currentStories = [];

  ctrl.nextPage = function(){
    ctrl.currentPage++;
    ctrl.pagePosts();
  }

  ctrl.prevPage = function(){
    ctrl.currentPage--;
    ctrl.pagePosts();
  }

  ctrl.pagePosts = function(){
    ctrl.currentStories = ctrl.postsIDs.slice(ctrl.currentPage * POSTS_PER_PAGE, (ctrl.currentPage + 1) * POSTS_PER_PAGE);
  }

  ctrl.pagePosts();
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);