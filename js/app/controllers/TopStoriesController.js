var numPosts = 30;

function TopStoriesController(posts) {
  var ctrl = this;

  ctrl.page = 0;
  ctrl.totalPosts = posts.data.length;
  ctrl.totalPages = Math.ceil(ctrl.totalPosts / numPosts);

  ctrl.paginatePosts = function () {
    ctrl.posts = posts.data.slice(ctrl.page * numPosts, (ctrl.page + 1) * numPosts);
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