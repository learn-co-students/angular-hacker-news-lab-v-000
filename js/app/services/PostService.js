function PostService($http) {

  this.getPost = function(id) {
    var post = $http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json');
    return post
  };

}

angular
  .module('app')
  .service('PostService', PostService);