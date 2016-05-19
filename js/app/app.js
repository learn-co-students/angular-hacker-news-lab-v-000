angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'views/top.html',
        controller: 'TopStoriesController as top',
        resolve: {
          posts: function(PostService) {
            return PostService.getPosts();
          }
        }
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: 'views/post.html',
        controller: 'PostController as post',
        resolve: {
          post: function($stateParams, PostService) {
            return PostService.getPost($stateParams.id);
          }
        }
      });

    $urlRouterProvider.otherwise('/top');
  });
