angular 
  .module('app', ['ngSanitize', 'ui.router', 'angularUtils.directives.dirPagination'])
  .config(function ($stateProvider){
    $stateProvider
      .state('top', {
        url: '/top',        
        templateUrl: 'views/top.html',
        controller: 'TopStoriesController as tp',
          resolve: {
          stories: function (StoryService) {
            return StoryService.getTopStoriesId();
          }
        }
      })
      .state('post', {
        url: '/post/:id',        
        templateUrl: 'views/topstory/post.html',
        controller: 'StoryController as onePost',
        resolve: {
           post: function ($stateParams, StoryService) {
            return StoryService.getItems($stateParams.id);
          }
        }
      });
  });