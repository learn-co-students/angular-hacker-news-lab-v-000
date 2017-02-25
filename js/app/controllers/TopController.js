function TopController(posts) {
  var ctrl = this;

  ctrl.page = 0;
  ctrl.totalPosts = posts.data.length;
  ctrl.totalPages = Math.ceil(ctrl.totalPosts / 30); //30 posts per page

  ctrl.paginate = function () {
    ctrl.posts = posts.data.slice(ctrl.page * 30, (ctrl.page + 1) * 30);
  }

  ctrl.next = function () {
    ctrl.page ++;
    ctrl.paginate();
  }

  ctrl.previous = function () {
    ctrl.page --;
    ctrl.paginate();
  }

  ctrl.paginate();
}

angular
  .module('app')
  .controller('TopController', TopController)
