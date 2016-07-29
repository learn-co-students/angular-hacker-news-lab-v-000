angular.module('app', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('list', {
        url: '/',
        templateUrl: 'views/home.html'
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: 'views/post.html'
      })


      $urlRouterProvider.otherwise('/');
  })
