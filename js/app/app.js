angular
  .module('app', ['ui.router'])
  .config(function($stateProvider,  $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeController as ctrl',
        resolve: {
          stories: function($http){
            return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
          }
        }
      });

     $urlRouterProvider.otherwise('/');
  });
