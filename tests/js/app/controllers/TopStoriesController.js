function TopStoriesController(posts) {

  var ctrl = this;
  var posts_per_page = 30;
  
  ctrl.total_pages = Math.ceil((posts.data.length)/posts_per_page)
  ctrl.page = 0;

  ctrl.paginatePosts = function() {
    ctrl.posts = posts.data.slice(ctrl.page*posts_per_page,(ctrl.page+1)*posts_per_page);
  };

  ctrl.nextPage = function() {
    ctrl.page ++;
    ctrl.paginatePosts()
  };

  ctrl.previousPage = function() {
    ctrl.page --;
    ctrl.paginatePosts()
  };

  ctrl.paginatePosts()
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);