function StoryService($http) {
  this.getTopStoryIds = function() {
    return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
  }

  this.getStoryJSONById =  function(id) {
    return $http.get('https://hacker-news.firebaseio.com/v0/item/'+ id +'.json');
  }
}

angular
  .module('app')
  .service("StoryService", StoryService);
