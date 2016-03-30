function TopStoriesController(posts) {
  var ctrl = this;
  this.message = "Welcome to Hacker News!";
  ctrl.page = 0;
  ctrl.totalPosts = posts.data.length;
  ctrl.totalPages = Math.ceil(ctrl.totalPosts / POSTS_PER_PAGE);

  this.nextPage = function() {
    ctrl.page++;
  };

  this.prevPage = function() {
    ctrl.page--;
  }

}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);
