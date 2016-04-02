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
      })
      .state('story', {
        url: '/story/:id',
        templateUrl: 'views/story.html',
        controller: 'StoryController as story',
        resolve: {
          story: function(StoriesService){
            return StoriesService.getPostInfo($stateParams.id);
          }
        }
      });

      $urlRouterProvider.otherwise('/');
  });