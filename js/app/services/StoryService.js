function StoryService($http) {
  var base_url = "https://hacker-news.firebaseio.com/v0/";

  this.getTopStories = function() {
    return $http.get(base_url + 'topstories.json');
  }

  this.getStory = function(id) {
    return $http.get(base_url + 'item/' + id + '.json');
  }
}

angular
  .module('app')
  .service('StoryService', StoryService);
