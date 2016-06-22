angular
    .module('app', ['ui.router', 'ngSanitize'])
    .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'views/top.html',
        controller: 'TopController as topCtrl',
        resolve: {
          top: function (HackerNewsService) {
            return HackerNewsService.getTopStories();
          }
        }
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: 'views/post.html',
        controller: 'PostController as postCtrl',
        resolve: {
          story: function (HackerNewsService, $stateParams) {
            return HackerNewsService.getStory($stateParams.id);
          }
        }
      });

    //$urlRouterProvider.otherwise('/top');
  }); 