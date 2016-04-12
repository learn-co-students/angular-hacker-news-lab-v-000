angular 
  .module('app', ['ngSanitize', 'ui.router', 'angularUtils.directives.dirPagination', 'ngRoute'])
  .config(function ($stateProvider){
    $stateProvider
      .state('topstory', {
        url: '/topstory',        
        templateUrl: 'views/topstory.html',
        controller: 'StoryController as top',
          resolve: {
          topstory: function (StoryService) {
            StoryService.getItems();
          }
        }
      })
      .state('story', {
        url: '/story/:id',        
        templateUrl: 'views/topstory/story.html',
        controller: 'StoryController as story',
        resolve: {
           story: function (PostService, $stateParams) {
              PostService.getPostInfo($stateParams.id);
          }
        }
      });
  });
