angular
  .module('app', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'views/top-stories.html',
        controller: 'TopStoriesController'
      });
    $urlRouterProvider.otherwise('/top');
  });