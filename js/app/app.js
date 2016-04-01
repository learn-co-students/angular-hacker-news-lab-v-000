angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'TopStoriesController as ctrl',
        resolve: {
          stories: function(StoriesService){
            return StoriesService.getTopStories();
          }
        }
      });
      $urlRouterProvider.otherwise('/');
  });