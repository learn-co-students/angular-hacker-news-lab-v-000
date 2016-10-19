function TopStoriesController (posts) {
  var ctrl = this;

  ctrl.page = 0;
  ctrl.postsTotal = posts.data.length;
  ctrl.pagesTotal = Math.ceil(ctrl.postsTotal / 30);

  ctrl.paginate = function () {
    ctrl.posts = posts.data.slice(ctrl.page * 30, (ctrl.page + 1) * 30);
  };

  ctrl.nextPage = function () {
    ctrl.page++;
    ctrl.paginate();
  };

  ctrl.previousPage = function () {
    ctrl.page--;
    ctrl.paginate();
  };

  ctrl.paginate();
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);
