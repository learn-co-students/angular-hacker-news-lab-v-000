angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'js/app/views/topstories.html',
        controller: 'TopStoriesController as top',
        resolve: {
          posts: function(PostsService) {
            return PostsService.getTopStories();
          }
        }
      })

      .state('post', {
        url: '/post/:id',
        templateUrl: 'js/app/views/post.html',
        controller: 'PostsController as post',
        resolve: {
          post: function($stateParams, PostsService) {
            return PostsService.getPost($stateParams.id);
          }
        }
      });

       $urlRouterProvider.otherwise('/top');
  });