function StoriesService($http) {
  this.getTopStories = function ($http) {
    debugger;
    return $http.get('/hacker-news.firebaseio.com/v0/topstories.json')
  }
}

angular
  .module('app')
  .service('StoriesService', StoriesService)
