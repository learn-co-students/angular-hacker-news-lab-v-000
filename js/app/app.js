angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config(function($stateProvider){
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'js/app/views/top.html',
        controller: 'PostsController'
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: 'js/app/views/post.html',
        controller: 'PostController'
      });
  })
  .config(function ($httpProvider) {
    $httpProvider.useApplyAsync(true);
  });
