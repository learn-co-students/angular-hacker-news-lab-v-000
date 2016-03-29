var MAX_POSTS = 30;

function TopStoriesController(posts) {
  var ctrl = this;

  ctrl.page = 0;
  ctrl.totalPosts = posts.data.length;
  ctrl.totalPages = Math.ceil(ctrl.totalPosts / MAX_POSTS);

  ctrl.paginatePosts = function () {
    ctrl.posts = posts.data.slice(ctrl.page * MAX_POSTS, (ctrl.page + 1) * MAX_POSTS);
  };

  ctrl.nextPage = function () {
    ctrl.page++;
    ctrl.paginatePosts()
  };

  ctrl.previousPage = function () {
    ctrl.page--;
    ctrl.paginatePosts();
  };

  ctrl.paginatePosts();
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);