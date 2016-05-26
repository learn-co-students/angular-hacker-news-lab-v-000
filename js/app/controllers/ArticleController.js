function ArticleController(article){
  this.article = article;

  this.comments = this.article.kids;
}

angular
    .module('app')
    .controller('ArticleController', ArticleController);
