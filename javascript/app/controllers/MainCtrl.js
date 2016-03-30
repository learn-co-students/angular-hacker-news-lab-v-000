function MainCtrl(ArticleService) {
  var ctrl = this;
  this.message = "Welcome to Hacker News!";
  this.articles = ArticleService.articles;
  this.article = ArticleService.article;
  this.page = 3;

  this.nextPage = function() {
    ctrl.page++;
  };

  this.prevPage = function() {
    ctrl.page--;
  }

}

angular
  .module('app')
  .controller('MainCtrl', MainCtrl);
