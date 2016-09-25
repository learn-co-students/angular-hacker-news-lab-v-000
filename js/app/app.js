angular
  .module('app', ['ui.router'])
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
  });
