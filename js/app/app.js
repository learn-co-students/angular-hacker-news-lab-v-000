angular
  .module('app', [ //define module
    'ui.router', //include ui-router dependency for routing
    'ngSanitize' //include ngSanitize dependency for injecting html into templates from a variable(using ng-bind-html)
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('top', {
      url: '/top',
      templateUrl: 'views/top-stories.html',
      controller: 'TopStoriesController as top',
      resolve: {
        posts: function (PostsService) {
          return PostsService.getTopStories();
        }
      }
    })
    .state('post', {
      url: '/post/:id',
      templateUrl: 'views/post.html',
      controller: 'PostController as post',
      resolve: {
        post: function ($stateParams, PostsService) {
          return PostsService.getPost($stateParams.id);
        }
      }
    });

    $urlRouterProvider.otherwise('/top'); //default route
});
