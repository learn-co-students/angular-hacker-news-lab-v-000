function StoryService($http) {
  var base_url = "https://hacker-news.firebaseio.com/v0/";
  // https://hacker-news.firebaseio.com/v0/topstories.json
  // https://hacker-news.firebaseio.com/v0/item/{id}.json

  this.getTopStories = function() {
    return $http.get(base_url + 'topstories.json');
  }

  this.getArticle = function(id) {
    return $http.get(base_url + 'item/' + id + '.json');
  }
}

angular
  .module('app')
  .service('StoryService', StoryService);
