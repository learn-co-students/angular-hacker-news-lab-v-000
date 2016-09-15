function StoriesService($http) {

  this.getTopStories = function() {
    var stories = $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
    return stories
  };

}

angular
  .module('app')
  .service('StoriesService', StoriesService);