angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: '/views/topstories.html',
        controller: 'TopStoriesController as ctrl',
        resolve: {
          topStories: function (TopStoriesService) {
            return TopStoriesService.getStories();
          }
        }
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: '/views/post.html',
        controller: 'PostController as ctrl',
        resolve: {
          post: function (PostService, $stateParams) {
            return PostService.getPost($stateParams.id);
          }
        }
      })
  });