function PostsService($http) {

  this.getTopStories = function() {
    var posts = $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
    return posts
  };

   this.getPost = function(id) {
    var post = $http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json');
    return post
  };

}

angular
  .module('app')
  .service('PostsService', PostsService);