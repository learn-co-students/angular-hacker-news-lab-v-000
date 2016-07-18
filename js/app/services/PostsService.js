var apiLink = 'https://hacker-news.firebaseio.com/v0';

function PostsService($http) {
  this.getTopStories = function () {
    return $http.get(apiLink + '/topstories.json');
  }

  this.getPost = function (id) {
    return $http.get(apiLink + '/item/' + id + '.json');
  }
}

angular
  .module('app')
  .service('PostsService', PostsService);
