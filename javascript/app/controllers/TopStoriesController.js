function TopStoriesController(post) {
  var ctrl = this;
  this.message = "Welcome to Hacker News!";
  this.articles = PostsService.articles;
  this.article = PostsService.article;
  this.page = 1;

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
