angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('top', {
      url: '/top',
      templateUrl: 'views/top.html',
      controller: 'TopStoriesController as topstoriesctrl',
      resolve: {
        stories: function(TopStoriesService){
          return TopStoriesService.getStories();
        }
      }
    });

    $stateProvider.state('post', {
      url: '/post/:id',
      templateUrl: 'views/post.html',
      controller: 'PostController as postctrl',
      resolve: {
        post: function(PostService, $stateParams){
          return PostService.getPost($stateParams.id).then(function(data){
            return data;
          });
        }
      }
    });

    $urlRouterProvider.otherwise('/top');
  });