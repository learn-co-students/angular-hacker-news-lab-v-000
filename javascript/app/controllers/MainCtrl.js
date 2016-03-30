function MainCtrl(ArticleService) {
  this.message = "Welcome to Hacker News!";
  this.articles = ArticleService.articles;
  this.article = ArticleService.article;

}

angular
  .module('app')
  .controller('MainCtrl', MainCtrl);
