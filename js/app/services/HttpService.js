function HttpService($http) {
  var service = this;

  service.getPostIds = function(){
    return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json').then();
  }

  service.getItem = function(id){
    return $http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json');
  }

}

angular
  .module('app')
  .service('HttpService', HttpService);