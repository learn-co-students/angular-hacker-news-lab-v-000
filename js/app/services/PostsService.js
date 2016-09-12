var BASE_NEWS_URL = "https://hacker-news.firebaseio.com/v0";
function PostsService($http) {
  this.topStories = function() {
    return $http.get(BASE_NEWS_URL + "/topstories.json");
  };

  this.getSingleStory = function(id) {
    return $http.get(BASE_NEWS_URL + "/item/" + id + ".json");
  };
}

angular
  .module('app')
  .service('PostsService', PostsService);
