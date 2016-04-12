angular 
  .module('app', ['ngSanitize', 'ui.router', 'angularUtils.directives.dirPagination'])
  .config(function ($stateProvider){
    $stateProvider
      .state('topstory', {
        url: '/topstory',        
        templateUrl: 'views/topstory.html',
        controller: 'TopStoriesController as top',
          resolve: {
          stories: function (StoryService) {
            return StoryService.getTopStoriesId();
          }
        }
      })
      .state('story', {
        url: '/story/:id',        
        templateUrl: 'views/topstory/story.html',
        controller: 'StoryController as onePost',
        resolve: {
           story: function ($stateParams, StoryService) {
            return StoryService.getItems($stateParams.id);
          }
        }
      });
  });