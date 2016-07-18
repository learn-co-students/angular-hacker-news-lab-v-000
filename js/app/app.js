angular
  .module('app', [
    'ui.router',
    'ngSanitize'
  ])
  .config(function ($stateProvider) {

    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'views/top.html',
        controller: 'TopStoriesController as top',
        resolve: {
          top: function ($http) {
            return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
          }
        }
      });
  });
