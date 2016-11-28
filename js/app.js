angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('topStories', {
        url: '/topstories',
        templateUrl: 'views/topstories.html',
        controller: 'TopStoriesController as topStories',
        resolve: {
          posts: function(PostService) {
            return PostService.getAllPosts();
          }
        }
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: 'views/post.html',
        controller: 'PostController as post',
        resolve: {
          post: function($stateParams, PostService) {
            return PostService.getSinglePost($stateParams.id);
          }
        }
      });

    $urlRouterProvider.otherwise('/topstories');
  });