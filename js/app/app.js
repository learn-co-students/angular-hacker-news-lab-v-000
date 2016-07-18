angular
  .module('app', [
    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'views/top.html',
        controller: 'TopStoriesController as ctrl',
        resolve: {
          top_stories:  function ($http) {
                        return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
                      }
        }
      })
  });
