angular
  .module('app', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/top');
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: '/views/top-stories.html',
        controller: 'StoryController'
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: '/views/post.html',
        controller: 'PostController'
      })
  })
