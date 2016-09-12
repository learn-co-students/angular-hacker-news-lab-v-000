var PAGE_LIMIT = 30;

function TopStoriesController(posts) {
  var ctrl = this;
  ctrl.page = 0;
  ctrl.postsTotal = posts.data.length;
  ctrl.pagesTotal = Math.ceil(ctrl.postsTotal / PAGE_LIMIT);

  ctrl.paginate = function() {
    ctrl.posts = posts.data.slice(ctrl.page * PAGE_LIMIT, (ctrl.page + 1) * PAGE_LIMIT);
  };

  ctrl.nextPage = function() {
    ctrl.page++;
    ctrl.paginate();
  };

  ctrl.previousPage = function() {
    ctrl.page--;
    ctrl.paginate();
  };

  ctrl.paginate();
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);
