angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config( function ($stateProvider) {
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'views/top.html',
        controller: 'TopStoriesController as top',
        resolve: {
          posts: function (HackerNewsService) {
            return HackerNewsService.getData();
          }
        }
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: 'views/post.html',
        controller: 'PostController as post',
        resolve: {
          post: function (HackerNewsService, $stateParams) {
            return HackerNewsService.getPost($stateParams.id);
          }
        }
      })
  });