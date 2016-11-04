angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config(function ($stateProvider, $urlRouteProvider) {
    $stateProvider
    .state('top', {
      url: '/top',
      templateUrl: 'views/top-stories.html',
      controller: 'TopStoriesController as top',
      resolve:{

      }
    });
    .state('post', {
      url: '/post',
      templateUrl: 'views/post.html',
      controller: 'PostController as post',
      resolve: {
        
      }
    });
})