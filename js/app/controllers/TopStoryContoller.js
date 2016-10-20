function TopStoryController(posts) {
  var ctrl = this;

  ctrl.page = 0;
  var storiesPerPage = 30;
  ctrl.totalStories = posts.data.length;
  ctrl.totalPages = Math.ceil(ctrl.totalStories / storiesPerPage);

  ctrl.getStories = function () {
    ctrl.posts = posts.data.slice(ctrl.page * storiesPerPage, (ctrl.page + 1) * storiesPerPage);
  };

  ctrl.nextPage = function () {
    ctrl.page++;
    ctrl.getStories()
  };

  ctrl.previousPage = function () {
    ctrl.page--;
    ctrl.getStories();
  };

  ctrl.getStories();
}

angular
  .module('app')
  .controller('TopStoryController', TopStoryController);