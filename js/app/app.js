angular
  .module('app', ['ui.router'])
  .config(['$stateProvider', function ($stateProvider){
    $stateProvider
      .state('topstories', {
        url: '',
        templateUrl: 'views/topstories.html',
        controller: 'StoriesController as ctrl'
      });

    }]);


