function TopStoriesController(posts) {
  var POSTS_PER_PAGE = 30;

  this.posts = posts.data
  this.page = 0;
  this.postSize = posts.data.length;
  this.totalPages = Math.ceil(this.postSize / POSTS_PER_PAGE);

  this.pagination = function() {
    this.posts = posts.data.slice(this.page * POSTS_PER_PAGE, (this.page + 1) * POSTS_PER_PAGE);
  };

  this.nextPage = function() {
    this.page ++;
    this.pagination();
  };

  this.prevPage = function() {
    this.page --;
    this.pagination();
  };

  this.pagination();

}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);