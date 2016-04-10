function ApiService($http){
  var service = this;
  service.topStoryIds = function(){
    return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
  };

  service.getStory = function(id){
    return $http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json');
  };

  service.getStoryPromiseBatch = function(idArray){
    return idArray.map(function(id){ return service.getStory(id); });
  };



};

angular
  .module('app')
  .service('ApiService', ['$http', ApiService]);
