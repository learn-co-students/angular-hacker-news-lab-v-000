function TopStoriesService ($http) {
  this.getTopStories = function () {
    var topStoriesIds = $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');

    var topStories = topStoriesIds.map(function (id) {
      return $http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json');
    });

    return topStories;
  };
}

TopStoriesService.$inject = ['$http'];

angular
  .module('app')
  .service('TopStoriesService', TopStoriesService);
