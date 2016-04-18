function TopStoriesService($http) {
  console.log("topStoriesService.js");

  this.getTopStories = function() {
    return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
  }



  //this.getStory = function(id) {
  //}

}

angular 
  .module('app')
  .service('TopStoriesService', TopStoriesService);
