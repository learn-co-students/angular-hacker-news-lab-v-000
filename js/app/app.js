var app = angular.module('HackerNews', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'views/topStories.html'
      });
      
    $urlRouterProvider.otherwise('/');
  });
