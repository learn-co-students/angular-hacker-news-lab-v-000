var API_URL = 'https://hacker-news.firebaseio.com/v0';

function StoriesService($http) {

  this.allStories = function () {
    return $http.get(API_URL + '/topstories.json')
  };

  this.getStory = function (id) {
    return $http.get(API_URL + '/item/' + id + '.json');
  };
}

angular
  .module('app')
  .service('StoriesService', StoriesService);
