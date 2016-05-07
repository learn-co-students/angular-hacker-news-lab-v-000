function GetTopStoriesService($http) {
  this.getTopStories = function() {
    return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
  };
}

angular
  .module('app')
  .service('getTopStoriesService', GetTopStoriesService);