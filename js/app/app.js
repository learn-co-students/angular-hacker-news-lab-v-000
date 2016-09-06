angular
  .module('app', ['ui.router'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('top stories', {
        url: '/topstories',
        templateUrl: 'views/topstories.html',
        controller: 'StoriesController as ctrl',
        resolve: {
            stories: function (StoriesService) {
              return StoriesService.getTopStories();
            }
          }
      });
  });
