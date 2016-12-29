(function() {
'use strict';

  angular
  .module('app', ['ui.router', 'angularUtils.directives.dirPagination', 'ngSanitize'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('top', {
      url: '/top?page',
      templateUrl: 'views/top-stories.html',
      controller: 'TopStoriesController as vm'
    })
    .state('post', {
      url: '/post?id',
      templateUrl: 'views/story-comments.html',
      controller: 'StoryController as vm'
    })
    $urlRouterProvider.otherwise('/top');
  });
})();