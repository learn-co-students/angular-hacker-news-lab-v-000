function HttpService($http) {
  var service = this;

  service.getTopStories = function(){
    return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
  }

  service.getStory = function(id){
    return $http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json');
  }

  service.getComment = function(id){
    return $http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json');
  }

}

angular
  .module('app')
  .service('HttpService', HttpService);