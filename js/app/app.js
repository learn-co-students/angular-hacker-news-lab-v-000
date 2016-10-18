angular
  .module('app', ['ui.router'])
  .config(function($stateProvider){
    $stateProvider
      .state('root', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'rootController',
        controllerAs: 'ctrl'
      });
  });
