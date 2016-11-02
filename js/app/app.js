angular
  .module('app', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'views/topstories.html',
        controller: 'TopStoriesController as top',
        resolve: {
          stories: function(TopStoriesService) {
            return TopStoriesService.getTopStories();
          }
        }
      })

      .state('post', {
        url: '/post/:id',
        templateUrl: 'views/post.html',
        controller: 'PostController as post'
      });

      $urlRouterProvider.otherwise('/top');
  });