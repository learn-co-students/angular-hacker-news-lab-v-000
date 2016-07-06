angular
    .module('app', [
      'ui.router',
      'ngSanitize'
  ])
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('top', {
          url: '/top',
          templateUrl: 'views/top-stories.html',
          controller: 'TopStoriesController as top'
        })
        .state('post', {
          url: '/post/:id',
          templateUrl: 'views/post.html',
          controller: 'PostController as post',
        });
        $urlRouterProvider.otherwise('/top');
      });