var api_url = 'https://hacker-news.firebaseio.com/v0/';

function PostsService($http) {

  this.getTopStories = function () {
    return $http.get('api_url' + 'topstories.json');
  }

  this.getStory = function (id) {
    return $http.get(api_url + '/item/' + id + '.json');
  };
}

angular
  .module('app')
  .service('PostsService', PostsService);