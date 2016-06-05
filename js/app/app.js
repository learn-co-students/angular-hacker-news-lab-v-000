angular
  .module('app', ['ui.router'])
  .config(function ($stateProvider){
    $stateProvider
      .state('topstories'), {
        url: '/topstories',
        templateUrl: 'views/topstories.html',
        controller: 'StoriesController'
      }
    });