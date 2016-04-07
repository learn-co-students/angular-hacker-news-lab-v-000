var URL = 'https://hacker-news.firebaseio.com/v0/';

function storiesService($http) {
  this.getTopStories = function () {
    return $http.get(URL + 'topstories.json');
  };

  this.getStory = function (id) {
    return $http.get(URL + 'item/' + id + '.json');
  }
}



angular
  .module('app')
  .service('storiesService', storiesService);