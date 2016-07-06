angular
    .module('app', ['ui.router'])
    .config(function($stateProvider) {
      $stateProvider
        .state('top', {
          url: '/top',
          templateUrl: 'views/top-stories.html',
          controller: 'TopStoriesController'
        });
      });