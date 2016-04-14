angular
  .module('app',['ui.router', 'ngSanitize'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('top',{
        url: '/top',
        templateUrl: 'js/app/views/home.html',
        controller: 'StoryIndexController as StoryIndex',
        resolve: {
          stories: function(StoryService){
            return StoryService.topStories();
          }
        }
      })
      .state('post',{
        url: '/post/:id',
        templateUrl: 'js/app/views/story.html',
        controller: 'StoryController as story',
        resolve: {
          story: function($stateParams, StoryService){
            return StoryService.getStory($stateParams.id);
          }
        }
      });
      $urlRouterProvider.otherwise('/home');
  });