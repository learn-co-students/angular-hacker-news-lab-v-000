angular 
  .module('app', ['ngSanitize', 'ui.router'])
  .config(function ($stateProvider){
    $stateProvider
      .state('topstory', {
        url: '/topstory',        
        templateUrl: 'views/topstory.html',
        controller: 'StoryController as top',
        resolve: {
          story: function (StoryService, $stateParams) {
            StoryService.getTopStories($stateParams.id);
          }
        }
      })
  });