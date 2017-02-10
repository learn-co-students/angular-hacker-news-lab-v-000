angular
    .module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('stories', {
          url: '/stories',
          templateUrl: 'views/top-stories.html',
          controller: 'TopStoriesController as stories',
          resolve: {
            stories: function(StoriesService){
              return StoriesService.getTopStories();
            }
          }
        });

        $urlRouterProvider.otherwise('/stories')
    })
