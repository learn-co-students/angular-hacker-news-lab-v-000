function TopStoriesService($http) {
  var serv = this

  serv.getTopStories = function() {
    return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json')
  }

  serv.getPost = function(id) {
    return $http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json')
  }

}

angular
  .module('app')
  .service('TopStoriesService', TopStoriesService);
