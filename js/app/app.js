angular.module('app', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('post', {
        url: '/',
        templateUrl: 'views/home.html'
      });
      $urlRouterProvider.otherwise('/');
  })
