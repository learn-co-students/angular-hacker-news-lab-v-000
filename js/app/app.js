angular
  .module('app', ['ui.router'])
  .config(function($stateProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'js/app/views/home.html',
        controller: 'PostsController'
      });
  });
