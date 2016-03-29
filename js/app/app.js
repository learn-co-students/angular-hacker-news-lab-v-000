angular
  .module('app', ['ui.router'])
  .config(function($stateProvider){
    $stateProvider
      .state('topstories', {
        url: '/topstories',
        templateUrl: 'views/topstories.html',
        controller: 'StoriesController as ctrl',
        resolve: {
          posts: function(PostsService){
            return PostsService.getTopStories();
          }
        }
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: 'views/post.html',
        controller: 'PostController as post',
        resolve: {
          post: function($stateParams, PostsService){
            return PostsService.getPost($stateParams.id);
          }
        }
      });
  });
