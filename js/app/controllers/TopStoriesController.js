var PER_PAGE = 30;

function TopStoriesController(posts){
  var ctrl = this;

  ctrl.page = 0;
  ctrl.totalPosts = posts.data.length;
  ctrl.totalPages = Math.ceil(ctrl.totalPosts / PER_PAGE);

  ctrl.paginatePosts = function(){
    ctrl.posts = posts.data.slice(ctrl.page * PER_PAGE, (ctrl.page + 1) * PER_PAGE);
  };

  ctrl.nextPage = function(){
    ctrl.page++;
    ctrl.paginatePosts();
  };

  ctrl.previousPage = function(){
    ctrl.page--;
    ctrl.paginatePosts();
  };

  ctrl.paginatePosts();
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);
  
