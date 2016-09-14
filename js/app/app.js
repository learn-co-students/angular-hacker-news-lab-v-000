angular
  .module('app', ['ui.router'])
  .config(function($stateProvider, $urlProvider) {
    $stateProvider
      .state('top' {
        url: '/top',
        templateUrl: 'views/top-stories.html',
        controller: 'TopStoriesController as top',
        resolve: {
          posts: function(PostsService) {
            return PostsService.getTopStories();
          }
        }
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: 'views/posts.html',
        controller: 'PostsController as post',
        resolve: {
          post: function($stateParams, PostsService) {
            return PostsService.getPost($stateParams.id);
          }
        }
      });
  })
