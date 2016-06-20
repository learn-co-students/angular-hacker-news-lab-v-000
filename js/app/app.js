angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'views/topstories.html',
        controller: 'TopStoryController as top',
        resolve: {
          stories: function (TopStoryService) {
            return TopStoryService.getTopStories();
          }
        }
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: 'views/post.html',
        controller: 'PostController as post',
        resolve: {
          post: function ($stateParams, TopStoryService) {
            return TopStoryService.getPost($stateParams.id);
          }
        }
      });
    
    $urlRouterProvider.otherwise('/top');
  });