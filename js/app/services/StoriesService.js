function StoriesService($http) {
    
    this.getIndex = function () {
      return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
    }

    this.getStory = function(id) {
      var url = "https://hacker-news.firebaseio.com/v0/item/" + id + ".json";
      return $http.get(url);
    }

}
 
angular
    .module('app')
    .service('StoriesService', StoriesService);
