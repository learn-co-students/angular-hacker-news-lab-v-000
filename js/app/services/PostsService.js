// returns a list of top posts, or one post by ID
function PostsService($http) {
  var API_URL = 'https://hacker-news.firebaseio.com/v0'

  this.getTopPosts = function () {
    return $http.get(API_URL + '/topstories.json')
  }

  this.getPostByID = function (id) {
    return $http.get(API_URL + '/item/' + id + '.json')
  }

}

angular
  .module('app')
  .service('PostsService', PostsService)