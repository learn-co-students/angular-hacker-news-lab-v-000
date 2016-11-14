function TopStoriesService($http){
  this.getStories = function(){
    return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
  }
}

angular
  .module('app')
  .service('TopStoriesService', TopStoriesService);