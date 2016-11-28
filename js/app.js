angular
  .module('app', ['ui.router', 'templates'])
  .config(function($stateProvider, $urlRouteProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeController as vm'
      })

    $urlRouteProvider.otherwise('/')
  });


  // .state('post', {
  //   url: '/post/:id',
  //   templateUrl: 'views/post.html',
  //   controller: 'PostController as post',
  // });