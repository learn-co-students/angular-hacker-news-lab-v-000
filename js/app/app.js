var app = angular.module('app', ['ui.router']);

  app.controller('HomeController', HomeController);
  app.factory('TopStories', TopStories);
  app.filter('paginationFilter', PaginationFilter);
  app.component('story', Story);

  app.config(function($stateProvider,  $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeController as ctrl',
        resolve: {
          stories: function(TopStories){
            return TopStories.getStories();
          }
        }
      })
      .state('story', {
        url: '/story/:id',
        templateUrl: 'views/story.html',
        controller: 'StoryController',
        resolve: {
          story: function(TopStories, $stateParams){
            console.log($stateParams.id);
            return TopStories.getStory($stateParams.id);
          }
        }
      });

     $urlRouterProvider.otherwise('/');
  });
