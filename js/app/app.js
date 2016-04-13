angular
  .module('app', ['ui.router'])
  .config( function ($stateProvider) {
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'views/top.html',
        controller: 'TopStoriesController as top',
        resolve: {
          posts: function ($http, $route) {
            return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json').then(function (response){
              console.log(response.data)
            })
          }
        }
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: 'views/post.html',
        controller: 'PostController as post',
        resolve: {
          post: function ($http, $route) {
            return $http.get('https://hacker-news.firebaseio.com/v0/item/' + $route.current.params.id + '.json').then(function (response){
              console.log(response.data)
            })  
          }
        }
      })
  });