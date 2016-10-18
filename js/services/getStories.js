function GetStories($http){
  return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
}

angular
  .module('app')
  .service('getStories', GetStories);
