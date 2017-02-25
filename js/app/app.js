angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'views/top-stories.html',
        controller: 'TopController as top',
        resolve: {
          posts: function (TopService) {
            return TopService.getPosts();
          }
        }
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: 'views/post.html',
        controller: 'PostController as post',
        resolve: {
          post: function (TopService, $stateParams) {
            return TopService.getPost($stateParams.id);
          }
        }
      })
      $urlRouterProvider.otherwise('/top');
  });
