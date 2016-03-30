function ArticleService($http) {
  var as = [];
  var a = [];

  this.getAll = function() {
    return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json').success(function(resp){
      as.push(resp);
    });
  };

  this.getArticle = function(id) {

    return $http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json')
    .success(function(resp) {
      a.splice(0,1);
      a.push(resp);
    })
  }

  this.articles = as;
  this.article = a;

}

angular
  .module('app')
  .service('ArticleService', ArticleService)
