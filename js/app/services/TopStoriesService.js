function TopStoriesService($http) {
  this.getStories = function() {
    return $http({method: 'GET', url: 'https://hacker-news.firebaseio.com/v0/topstories.json' });
  };

  this.getDetail = function(id) {
    return $http({method: 'GET', url: 'https://hacker-news.firebaseio.com/v0/item/' + id + '.json' });
  };
}

angular
  .module('app')
  .service('TopStoriesService', TopStoriesService);
