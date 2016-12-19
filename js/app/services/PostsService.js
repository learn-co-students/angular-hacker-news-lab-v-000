var hackerNewsUrl = 'https://hacker-news.firebaseio.com/v0';

function PostsService($http) {

  this.getTopStories = function () {
    return $http.get(hackerNewsUrl + '/topstories.json');
  };

  this.getPost = function (id) {
    return $http.get(hackerNewsUrl + '/item/' + id + '.json');
  };

}

angular
  .module('app')
  .service('PostsService', PostsService);
