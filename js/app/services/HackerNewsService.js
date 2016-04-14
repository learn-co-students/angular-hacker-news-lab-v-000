function HackerNewsService ($http){

  this.getData = function () {
    return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
  };

  this.getPost = function (postId) {
    return $http.get("https://hacker-news.firebaseio.com/v0/item/" + postId + ".json");
  }; 

}

angular
  .module('app')
  .service('HackerNewsService', HackerNewsService)