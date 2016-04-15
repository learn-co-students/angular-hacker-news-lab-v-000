hackerNewsApp.service('StoriesService', function($http){
  var API_URL = 'https://hacker-news.firebaseio.com/v0';

  this.getStories = function(){
    return $http.get(API_URL + '/topstories.json')
  };

  this.getDetails = function(id){
    return $http.get(API_URL + '/item/' + id + '.json');
  };

});