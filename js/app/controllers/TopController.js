angular
  .module('app')
  .controller('TopController', TopController);

var POST_LIMIT = 30;

function TopController(posts) {
  var ctrl = this;

  ctrl.page = 0;
  ctrl.totalPosts = posts.data.length;
  ctrl.totalPages = Math.ceil(ctrl.totalPosts / POST_LIMIT);

  ctrl.paginatePosts = function() {
    ctrl.posts = posts.data.slice(ctrl.page * POST_LIMIT, (ctrl.page + 1) * POST_LIMIT);
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
};
