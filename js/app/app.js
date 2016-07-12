angular
.module('app', ['ui.router', 'ngSanitize'])
.config(function ($stateProvider, $urlRouterProvider) {
$stateProvider
  .state('top', {
    url: '/top',
    templateUrl: '/views/top.html',
    controller: 'MainController as main',
    resolve: {
      topStories: function (DataService) {
        return DataService.getStoryIds();
      }
    }
  })
  .state('post', {
    url: '/post/:id',
    templateUrl: 'views/post.html',
    controller: 'PostController as ctrl',
    resolve: {
      post: function (DataService, $stateParams) {
        return DataService.getStoryInfo($stateParams.id);
      }
    }
  });

  $urlRouterProvider.otherwise('/top');
});
