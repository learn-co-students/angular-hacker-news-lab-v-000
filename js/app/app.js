angular
  .module('app', ['ui.router'])
  .config(function ($stateProvider) {
    $stateProvider

      .state('post',{
        url: '/post/:id',
        templateUrl: 'views/post.html',
        controller: 'PostsController'
      })

      .state('top', {
        url: '/top',
        templateUrl: 'views/index.html',
        controller: 'TopStoriesController',
        resolve: {
          data: function ($http, $stateParams){
            return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
          }
        }
      });
  });

