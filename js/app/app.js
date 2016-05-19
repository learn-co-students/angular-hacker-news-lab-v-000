angular
  .module('app', [ //define module
    'ui.router', //include ui-router dependency for routing
    'ngSanitize' //include ngSanitize dependency for injecting html into templates from a variable(using ng-bind-html)
  ])
  .config(function ($stateProvider, $urlRouterProvider) { //inject $stateProvider for ui-router, and inject $urlRouterProvider for 'otherwise' method at bottom
    $stateProvider
    .state('top', { //create a ui-router state
      url: '/top', //set url route
      templateUrl: 'views/top-stories.html', //set template url
      controller: 'TopStoriesController as top', //set controller for this route (equavelent of using <ng-controller="..."> in template)
      resolve: { //execute this code before the template is rendered
        posts: function (PostsService) { //set posts equal to PostsService.getTopStories() to be used in the template
          return PostsService.getTopStories();
        }
      }
    })
    .state('post', {
      url: '/post/:id', //create dynamic route, with id in url
      templateUrl: 'views/post.html',
      controller: 'PostController as post',
      resolve: { //execute this code before the template is rendered
        post: function ($stateParams, PostsService) {
          return PostsService.getPost($stateParams.id); //load individual post
        }
      }
    });

    $urlRouterProvider.otherwise('/top'); //default route
});
