angular
  .module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'views/top-stories.html',
        controller: 'TopStoriesController as top',
        resolve: {
          posts: function(PostsService) {
            return PostsService.getTopStories();
          }
        }
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: 'views/post-stories.html',
        controller: 'PostStoriesController as top',
        resolve: {
          post: function($stateParams, PostsService) {
            return PostsService.getSingleStory($stateParams.id);
          }
        }
      });

    $urlRouterProvider.otherwise('/top');
  });
