function PostService ($http) { // technically also CommentService
  this.getPost = function (id) {
    return $http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json');
  }
}

angular
  .module('app')
  .service('PostService', PostService)