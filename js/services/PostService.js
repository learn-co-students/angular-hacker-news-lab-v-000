function PostService($http, $resource) {
  var Post = $resource('/posts/:postId');

  this.getPost

  this.getAllPosts = function() {
    return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
  };

  this.getSinglePost = function(id) {
    return $http.get('https://hacker-news.firebaseio.com/v0/item/{id}.json')
  };
}

angular
  .module('app')
  .service('PostService', PostService);