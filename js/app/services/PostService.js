function PostService($http) {
  this.getTopStories = function() {
    debugger;
    return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
  };
}

angular
  .module('app')
  .service('PostService', PostService);