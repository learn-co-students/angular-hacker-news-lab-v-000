angular
    .module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('top',{
          url: '/top',
          templateUrl: '/views/posts.html',
          controller: 'PostController',
          resolve:{
            top_stories: function($http){
              return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
            }
          }
        });
    });
