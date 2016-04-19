var URL = 'https://hacker-news.firebaseio.com/v0';

function PostsService($http) {
  this.topStories = function () {
    return $http.get(URL + '/topstories.json');
  };

  this.getPost = function (id) {
    return $http.get(URL + '/item/' + id + '.json');
  };
    // JSON data ex.: https://hacker-news.firebaseio.com/v0/item/11381625.json
}

angular
  .module('app')
  .service('PostsService', PostsService);
