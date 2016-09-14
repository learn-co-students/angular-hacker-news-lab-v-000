var PAGE_POST_LIMIT = 30;

function TopStoriesController(posts) {
  var ctrl = this;

  ctrl.page = 0;
  ctrl.postsTotal = posts.data.length;
  ctrl.pagesTotal = Math.ceil(ctrl.postsTotal / PAGE_POST_LIMIT);

  ctrl.posts = posts.data.slice(ctrl.page * POSTS_PER_PAGE, (ctrl.page + 1) * PAGE_POST_LIMIT);

  ctrl.nextPage = function() {
    ctrl.page++;
    ctrl.posts = posts.data.slice(ctrl.page * PAGE_POST_LIMIT, (ctrl.page + 1) * PAGE_POST_LIMIT);
  };

  ctrl.previousPage = function() {
    ctrl.page--;
    ctrl.posts = posts.data.slice(ctrl.page * PAGE_POST_LIMIT), (ctrl.page + 1) * PAGE_POST_LIMIT;
  };
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);
