angular
    .module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('top',{
          url: '/top',
          templateUrl: '/views/posts.html',
          controller: 'TopPostsController',
          controllerAs: 'ctrl',
          resolve:{
            top_stories: function(PostService){
              return PostService.getPosts();
            }
          }
        })
        .state('post', {
          url: '/post/:id',
          templateUrl: '/views/article.html',
          controller: 'ArticleController',
          controllerAs: 'ctrl',
          resolve:{
            article: function(PostService, $stateParams){
              return PostService.getPost($stateParams.id);
            }
          }
        });
    });
