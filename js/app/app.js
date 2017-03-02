angular
  .module('app', ['ui.router'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'views/top.html',
        controller: 'TopStoriesController'
      })
      .state('post', {
        url: '/post/:id'
      });
  });
