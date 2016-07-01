function TopStoriesController(posts) {
  var ctrl = this;

  ctrl.page = 0;
  ctrl.allPosts = posts.data.length;
  ctrl.allPages = Math.ceil(ctrl.allPosts / 30);

  ctrl.pageForward = function(){
    ctrl.page++;
    ctrl.paginatePosts()
  };
  ctrl.pageBack = function(){
    ctrl.page--;
    ctrl.paginatePosts();
  };
  ctrl.pageSplit = function(){
    ctrl.posts = posts.data.slice(ctrl.page * 30, (ctrl.page + 1) * 30);
  };

  ctrl.pageSplit();
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);