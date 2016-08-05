function PostsService($http) {

  var URL = 'https://hacker-news.firebaseio.com/v0/';

  this.getPosts = function() {
    return $http.get(URL + 'topstories.json');
  };

  this.getPost = function(id) {
    return $http.get(URL + 'item/' + id + '.json');
  };

}

angular
  .module('app')
  .service('PostsService', PostsService);