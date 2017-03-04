angular
  .module('app', [
    'ui.router',
    'ngSanitize'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .when('', '/top');
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'views/top.html',
        controller: 'TopStoriesController as top',
        resolve: {
          stories: function(StoriesService) {
            return StoriesService.getTopStoriesIDs();
          }
        }
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: 'views/post.html',
        controller: 'StoryController as story',
        resolve: {
          story: function($stateParams, StoriesService) {
            return StoriesService.getStoryByID($stateParams.id);
          }
        }
      });
  });
