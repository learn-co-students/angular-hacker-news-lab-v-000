angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'views/topstories.html',
        controller: 'TopStoriesController as topStories',
        resolve: {
          topStories: function(TopStoriesService) {
            return TopStoriesService.getTopStories();
          }
        }
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: 'views/post.html',
        controller: 'PostController as post',
        resolve: {
          post: function($stateParams, TopStoriesService) {
            return TopStoriesService.getPost($stateParams.id);
          }
        }
      });

      $urlRouterProvider.otherwise('/top');
  });