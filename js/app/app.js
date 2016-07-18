angular
  .module('app', [
    'ui.router',
    'ngSanitize'
  ])
  .config(function ($stateProvider) {

    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'views/top.html',
        controller: 'TopStoriesController as top',
        resolve: {
          posts: function (PostsService) {
            return PostsService.getTopStories();
          }
        }
      })
      .state('post', {
        url: 'post/:id',
        templateUrl: 'views/post.html',
        controller: 'PostController as post',
        resolve: function (PostsService, $stateParams) {
          return PostsService.get(getTopStories($stateParams.id));
        }
      });
  });
