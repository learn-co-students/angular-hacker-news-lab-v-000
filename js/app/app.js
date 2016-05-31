angular
  .module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) { // https://github.com/angular-ui/ui-router
    $urlRouterProvider.otherwise("/top");
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'views/top-stories.html',
        controller: 'TopStoriesController as top',
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: 'views/post.html',
        controller: 'PostsController',
      })
  })