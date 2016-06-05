function StoryService($http){
  this.getStories = function(){
    return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
  }

  this.getPostById = function(id){
    return $http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json');
  }
}

StoryService.inject = ['$http'];

angular
  .module('app')
  .service('StoryService', StoryService)

