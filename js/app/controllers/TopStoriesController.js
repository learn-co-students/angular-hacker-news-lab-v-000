var post_limit = 30;

function TopStoriesController(posts) {
  var ctrl = this;

  ctrl.page = 0;
  ctrl.totalPosts = posts.data.length;
  ctrl.totalPages = Math.ceil(ctrl.totalPosts / post_limit);

  ctrl.paginatePosts = function () {
    ctrl.posts = posts.data.slice(ctrl.page * post_limit, (ctrl.page + 1) * post_limit);
  };

};


angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);
