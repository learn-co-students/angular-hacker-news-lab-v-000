var API_URL = 'https://hacker-news.firebaseio.com/v0';

function PostsService($http) {
  this.getTopStories = function () { //grab all the top stories from the URL
    return $http.get(API_URL + '/topstories.json');
  };

  this.getPost = function(id) { //grab information about a single post by it's ID. This should hit https://hacker-news.firebaseio.com/v0/item/{id}.json
    return $http.get(API_URL + '/item/' + id + '.json');
  }
}

angular
  .module('app')
  .service('PostsService', PostsService);
