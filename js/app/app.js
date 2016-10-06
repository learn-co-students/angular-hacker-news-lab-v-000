var app = angular.module('HackerNews', ['ui.router']);

app.config([
            "$stateProvider", "$urlRouterProvider",
    function($stateProvider ,  $urlRouterProvider) {
        
        $stateProvider
          .state('top', {
            url: '/top',
            templateUrl: 'views/top_stories.html',
            controller: 'StoriesController'
          });
          
        $urlRouterProvider.otherwise('/');
}]);
