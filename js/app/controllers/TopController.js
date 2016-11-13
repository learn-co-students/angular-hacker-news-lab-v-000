var POSTS_PER_PAGE = 30;
function TopController(posts, TopService) {
  var ctrl = this;
  ctrl.detail = [];
  
  ctrl.page = 0;
  ctrl.totalPosts = posts.data.length;
  ctrl.totalPages = Math.ceil(ctrl.totalPosts / POSTS_PER_PAGE);

  ctrl.paginatePosts = function () {
    ctrl.posts = posts.data.slice(ctrl.page * POSTS_PER_PAGE, (ctrl.page + 1) * POSTS_PER_PAGE);
    var info;
    for (var i = 0; i < ctrl.posts.length; i++) {
      info = TopService.getPost(ctrl.posts[i])
      ctrl.detail.push(info.$$state);
    }
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
  .controller('TopController', TopController);