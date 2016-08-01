angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'views/top.html',
        controller: 'TopStoriesController as top',
        resolve: {
          stories: function(StoryService) {
            return StoryService.getTopStories();
          }
        }
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: 'views/post.html',
        controller: 'StoryController as story',
        resolve: {
          story: function($stateParams, StoryService) {
            return StoryService.getStory($stateParams.id);
          }
        }
      })

      $urlRouterProvider.otherwise('/top');
});
