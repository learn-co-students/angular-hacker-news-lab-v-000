function ArticleController(article){
  this.article = article.data;
}

angular
    .module('app')
    .controller('ArticleController', ArticleController);
