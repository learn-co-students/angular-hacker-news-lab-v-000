function TopController(posts) {
  var ctrl = this;
  // ctrl.posts = posts.data;
  ctrl.currentPage = 0;
  // ctrl.paginatedPosts = [];

  //returns the 30 posts for the currentPage.
  ctrl.paginatePage = function() {
    // var lastPost = ctrl.currentPage * 30;
    // var firstPost = lastPost - 30;
    //
    // for(i = firstPost; i < lastPost; i++) {
    //   ctrl.paginatedPosts.push(posts[i]);
    // }
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
