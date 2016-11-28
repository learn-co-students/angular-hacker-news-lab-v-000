angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('top', { // add a single state for the top stories
        url: '/top',
        templateUrl: 'views/top-stories.html',
        controller: 'TopStoriesController as top',
        resolve: {
          posts: function(TopStoriesService) {
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
            return TopStoriesService.getPost($stateParams.id)
          }
        }
      })
      $urlRouterProvider.otherwise('/top');
  });
