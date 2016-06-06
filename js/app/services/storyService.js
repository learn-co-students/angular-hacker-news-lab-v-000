function storyService($http){

  this.getStories = function(){
    return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');      
  };

  this.getSingleStory = function(id){
    return $http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json');        
  };

}

angular
  .module('app')
  .service('storyService', storyService);