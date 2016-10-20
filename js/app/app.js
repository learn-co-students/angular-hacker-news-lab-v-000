var app = angular.module('app', ['ui.router']);

  app.controller('HomeController', HomeController);
  app.factory('TopStories', TopStories);
  app.filter('paginationFilter', PaginationFilter);

  app.config(function($stateProvider,  $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeController as ctrl',
        resolve: {
          stories: function($http){
            //need to replace this with factory call.
            return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
          }
        }
      });

     $urlRouterProvider.otherwise('/');
  });
