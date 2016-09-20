angular
  .module('app', ['ui.router'])
  .config(function($stateProvider) {
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'js/app/views/top-stories.html'  
      })  
    }
  );
