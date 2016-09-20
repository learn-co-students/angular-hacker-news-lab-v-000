angular
  .module('app', ['ui.router'])
  .config(function($stateProvider) {
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'js/app/views/top-stories.html',
        controller: 'TopStoriesController as top',
        resolve: {
          posts: function(PostService) {
            debugger;
            return PostService.getTopStories();
          }
        }  
      })  
    }
  );
