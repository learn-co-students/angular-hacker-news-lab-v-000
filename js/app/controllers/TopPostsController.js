function TopPostsController(posts) {
  var ctrl = this
  var POSTS_PER_PAGE = 30

  ctrl.page = 0
  ctrl.totalPosts = posts.data.length
  ctrl.totalPages = Math.ceil(ctrl.totalPosts / POSTS_PER_PAGE)

  ctrl.paginatePosts = function () {
    ctrl.posts = posts.data.slice(ctrl.page * POSTS_PER_PAGE, (ctrl.page + 1) * POSTS_PER_PAGE);
  };

  ctrl.previousPage = function () {
    ctrl.page--
    ctrl.paginatePosts()
  }

  ctrl.nextPage = function () {
    ctrl.page++
    ctrl.paginatePosts()
  }

  ctrl.paginatePosts()
}

angular
  .module('app')
  .controller('TopPostsController', TopPostsController)