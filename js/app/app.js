angular
  .module('app', [
    'ui.router',
    'ngSanitize'
  ])
  .config(function ($stateProvider) {

    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'views/top.html',
        controller: 'TopStoriesController as top',
        resolve: {
          posts: function (PostsService) {
            return PostsService.getTopStories();
          }
        }
      });
  });
