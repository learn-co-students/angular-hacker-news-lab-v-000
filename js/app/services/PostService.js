function PostService ($http){
  var BASE_URL = 'https://hacker-news.firebaseio.com/v0/';

  this.getPosts = function(){
    //this will only ever be the list of 500~ article IDs
    return $http.get(BASE_URL + 'topstories.json');
  };

  this.getPost = function(id){
    //this can be a root article, root comment, or child comment
    return $http.get(BASE_URL + 'item/' + id + '.json')
      .then(function(res){
        return res.data;
      });
  }
}

angular
    .module('app')
    .service('PostService', PostService);
