angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config(function($stateProvider){
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'views/top-stories.html',
        controller: 'TopStoriesController as top',
        resolve: {
          items: function(StoryService){
            return StoryService.getItems();
          }
        }
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: 'views/story.html',
        controller: 'StoryController as vm',
        resolve: {
          item: function($stateParams, StoryService){
            return StoryService.getItemById($stateParams.id);
          }
        }
      })
  });
