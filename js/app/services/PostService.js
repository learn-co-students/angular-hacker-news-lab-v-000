function PostsService($http) {
  
var API_URL = 'https://hacker-news.firebaseio.com/v0';


  this.getTopStories = function () {
    return $http.get(API_URL + '/topstories.json');
  };

  this.getPost = function (id) {
    return $http.get(API_URL + '/item/' + id + '.json');
  };
}

angular
  .module('app')
  .service('PostsService', PostsService);