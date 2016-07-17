angular 
  .module('app', ['ui.router'])
  .config(function($stateProvider){
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'views/topstories.html',
        controller: 'TopStoriesController as top',
        resolve: {
          posts: function (PostsService) {
            return PostsService.getTopStories();
          }
        }
      })
      .state('post', {
        url: '/post/:id',
        controller: 'PostController',
        resolve: {}
      });
    });