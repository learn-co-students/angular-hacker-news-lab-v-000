function NewsService($http) {
  this.getNews = function() {
    return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(function(res){
        debugger
        return res.data;
    });
  }

  this.getPost = function(id) {
    return $http.get('https://hacker-news.firebaseio.com/v0/item/'+id+'.json');
  }
}

angular
  .module('app')
  .service('NewsService', NewsService);