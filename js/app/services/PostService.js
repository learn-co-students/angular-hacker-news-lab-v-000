function PostService ($http) {
  this.baseUrl = 'https://hacker-news.firebaseio.com/v0';

  this.getPost = function (id) {
    return $http.get(this.baseUrl + '/item/' + id + '.json');
  };

  this.getPostIds = function() {
    return $http.get(this.baseUrl + '/topstories.json');
  }
}

angular
  .module('app')
  .service('PostService', PostService);
