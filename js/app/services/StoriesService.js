function StoriesService($http) {

  this.getTopStories = function() {
    var stories_ids = $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
    return stories_ids
  };

   this.getStory = function(id) {
    var story = $http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json');
    return story
  };

}

angular
  .module('app')
  .service('StoriesService', StoriesService);