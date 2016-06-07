function TopController(posts) {
  var ctrl = this;
  ctrl.currentPage = 0;

  //returns the 30 posts for the currentPage.
  ctrl.paginatePage = function() {
    var firstPost = ctrl.currentPage * 30;
    ctrl.posts = posts.data.slice(firstPost, firstPost + 30);
  }

  //prev and next return the page numbers to 'get' the correct posts
  ctrl.previousPage = function() {
    ctrl.currentPage--;
    ctrl.paginatePage();
  }
  ctrl.nextPage = function() {
    ctrl.currentPage++;
    ctrl.paginatePage();
  }
  ctrl.paginatePage();
}

angular
  .module('app')
  .controller('TopController', TopController);
