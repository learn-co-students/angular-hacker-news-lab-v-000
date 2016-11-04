function TopStoriesController(posts) {

  var posts_limit = 30;

  var ctrl = this;

  ctrl.page = 0;
  ctrl.totalPosts = posts.data.length;
  ctrl.totalPages = Math.ceil(ctrl.totalPosts / posts_limit);

  ctrl.paginatePosts = function () {
    ctrl.posts = posts.data.slice(ctrl.page * posts_limit, (ctrl.page + 1) * posts_limit);
  };

  ctrl.nextPage = function () {
    ctrl.page ++;
    ctrl.paginatePosts()
  }

  ctrl.previousPage = function () {
    ctrl.page --;
    ctrl.paginatePosts()
  };

  ctrl.paginatePosts();

}


angular
    .module('app')
    .controller('TopStoriesController', TopStoriesController);