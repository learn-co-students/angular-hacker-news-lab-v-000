function StoriesService($http){
  var HACKER_NEWS_API = 'https://hacker-news.firebaseio.com/v0'; 
  
  this.getTopStories = function(){
    return $http.get(HACKER_NEWS_API + '/topstories.json');
  }

  this.getPost = function(id){
    return $http.get(HACKER_NEWS_API + '/item/' + id + '.json');
  }

}

angular
  .module('app')
  .service('StoriesService', StoriesService);