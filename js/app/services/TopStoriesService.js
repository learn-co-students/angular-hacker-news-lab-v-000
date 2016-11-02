function TopStoriesService($http) {
  this.getTopStories = function () {
    return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(function(response) {
        console.log(response);
      });
  }
}

angular
  .module('app')
  .service('TopStoriesService', TopStoriesService);