angular
  .module('app',['ui.router', 'ngSanitize'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('top',{
        url:'/top',
        templateUrl:'js/app/views/top-stories.html',
        controller: 'TopStoriesController as topStories',
        resolve:{
          posts: function(StoriesService){
            return StoriesService.getTopStories();
          }
        }
      })
      .state('post',{
        url: '/post/:id',
        templateUrl:'js/app/views/post.html',
        controller:'PostController as post',
        resolve:{
          post: function($stateParams, StoriesService){
            return StoriesService.getPost($stateParams.id)
          }
        }
      });
      $urlRouterProvider.otherwise('/top');
  });