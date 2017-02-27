function TopPostsController(posts) {
  var ctrl = this
  //ctrl.posts = posts.data

  ctrl.page = 0
  ctrl.totalPost = posts.data.length
  ctrl.totalPage = Math.ceil(ctrl.totalPost / 30)
  ctrl.displayPosts = function () {
    ctrl.posts = posts.data.slice(ctrl.page*30, (ctrl.page+1)*30)
  }
  ctrl.nextPage = function () {
    ctrl.page += 1;
    ctrl.displayPosts()
  }
  ctrl.previousPage = function () {
    ctrl.page -= 1;
    ctrl.displayPosts()
  }
  ctrl.displayPosts()
}

angular
  .module('app')
  .controller('TopPostsController', TopPostsController);