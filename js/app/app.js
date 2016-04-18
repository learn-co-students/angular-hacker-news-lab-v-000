angular
  .module('app', [
      'ui.router',
      'ngSanitize'
    ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'views/top-stories.html',
        controller: 'TopStoriesController as top',
        resolve: {
          stories: function (StoriesService) {
            return StoriesService.getTopStories();
          }
        }
      })
      .state('story', {
        url: '/story/:id',
        templateUrl: 'views/post.html',
        controller: 'StoryController as story',
        resolve: {
          story: function ($stateParams, StoriesService) {
            return StoriesService.getStory($stateParams.id);
          }
        }
      });

    $urlRouterProvider.otherwise('/top');
  });
