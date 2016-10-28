function TopStoriesController(posts) {
  var ctrl = this;

  ctrl.page = 0;
  var posts_per_page = 30;
  ctrl.totalPosts = posts.data.length;
  ctrl.totalPages = Math.ceil(ctrl.totalPosts / posts_per_page);

  ctrl.paginatePosts = function () {
    ctrl.posts = posts.data.slice(ctrl.page * posts_per_page, (ctrl.page + 1) * posts_per_page);
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
