angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('post',{
        url: '/post/:id',
        templateUrl: 'views/post.html',
        controller: 'PostsController as post',
        resolve: {
          post: function ($stateParams, PostsService){
            return PostsService.getPost($stateParams.id);
          }
        }
      })

      .state('top', {
        url: '/top',
        templateUrl: 'views/index.html',
        controller: 'TopStoriesController as top',
        resolve: {
          posts: function (PostsService){
            PostsService.getTopStories(); 
          }
        }
      });

    $urlRouterProvider.otherwise('/top');
    
  });

