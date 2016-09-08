angular
  .module('app', ['ui.router'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'views/topstories.html',
        controller: 'StoriesController',
        controllerAs: 'storiesCtrl',
        resolve: {
            stories: function (StoriesService) {
               return StoriesService.getStoryIds();
             }
        }
      })
      .state('post',{
        url: '/post/:id',
        templateUrl: 'views/postitem.html'
      });
  });
