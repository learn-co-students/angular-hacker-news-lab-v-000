angular
  .module('app', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'views/top-stories.html',
        controller: 'TopStoriesController',
        controllerAs: 'top'
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: 'views/post.html',
        controller: 'PostController',
        controllerAs: 'post',
        resolve: {
          post: function($stateParams, PostsService) {
            return PostsService.getPost($stateParams.id);
          }
        }
      });
    $urlRouterProvider.otherwise('/top');
  });