function storyService($http){

  this.getStories = function(){
    return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
            
    };

  this.getSingleStory = function(id){
    $http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json')
            .then(function(resp){
              debugger
            }, function(err){
              debugger
            });
  };

}

angular
  .module('app')
  .service('storyService', storyService);