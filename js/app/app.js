angular.module('app', ['ui.router', 'ngSanitize'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'views/home.html'
      })
      .state('post', {
        url: '/post/:id',
        controller: 'PostInfoCtrl as post',
        templateUrl: 'views/post.html'
      })


      $urlRouterProvider.otherwise('/top');
  })
