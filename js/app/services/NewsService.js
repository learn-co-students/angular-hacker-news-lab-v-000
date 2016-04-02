angular
  .module('app')
  .service('NewsService', function($http){
    var baseUrl = 'https://hacker-news.firebaseio.com/v0/';

    this.getStories = function(){
      return $http.get(baseUrl + 'topstories.json');
    }

    this.getArticle = function (id){
      return $http.get(baseUrl + 'item/' + id + '.json');
    }
  });
