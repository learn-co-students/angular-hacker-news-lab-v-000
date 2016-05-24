angular
    .module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('top',{
          url: '/top',
          templateUrl: '/views/posts.html',
          controller: 'PostController',
          controllerAs: 'ctrl',
          resolve:{
            top_stories: function($http){
              return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
            }
          }
        })
        .state('post', {
          url: '/post/:id',
          templateUrl: '/views/article.html',
          controller: 'ArticleController',
          controllerAs: 'ctrl',
          resolve:{
            article: function($http){
              return $http.get('https://hacker-news.firebaseio.com/v0/item/11761065.json');
            }
          }
        });
    });
