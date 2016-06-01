var API_URL = 'https://hacker-news.firebaseio.com/v0'

function PostsService($http) {
  this.getTopStories = function() {
    // console.log(API_URL + '/topstories.json');
    return $http.get(API_URL + '/topstories.json');
  };

  this.getPost = function(id) {
    // console.log(API_URL + '/item/' + id + '.json');
    return $http.get(API_URL + '/item/' + id + '.json');
  };
}

angular
  .module('app')
  .service('PostsService', PostsService);