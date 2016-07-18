function TopStoriesController(posts) {
  var ctrl = this;

  ctrl.data = posts.data;

  ctrl.currentPage = 0;
  ctrl.totalPosts = posts.length;
  ctrl.totalPages = Math.ceil(ctrl.totalPosts / 30)

  ctrl.paginatePosts = function () {
    ctrl.posts = posts.data.slice(ctrl.currentPage * 30, (ctrl.currentPage + 1) * 30);
  }

  ctrl.nextPage = function () {
    ctrl.currentPage++;
    ctrl.paginatePosts();
  }

  ctrl.previousPage = function () {
    ctrl.currentPage--;
    ctrl.paginatePosts();
  }

  ctrl.paginatePosts();
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);
