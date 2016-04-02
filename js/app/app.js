angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'views/home.html',
        controller: 'TopStoriesController as ctrl',
        resolve: {
          stories: function(StoriesService){
            return StoriesService.getTopStories();
          }
        }
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: 'views/story.html',
        controller: 'StoryController as storyCtrl',
        resolve: {
          story: function($stateParams, StoriesService){
            return StoriesService.getPostInfo($stateParams.id);
          }
        }
      });

      $urlRouterProvider.otherwise('/top');
  });