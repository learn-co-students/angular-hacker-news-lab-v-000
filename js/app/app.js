angular
  .module('app', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'views/top.html'
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: 'views/post.html',
        controller: 'PostController as post',
        resolve: {
          post: function ($http, $stateParams) {
            return $http.get('http://0.0.0.0:8080/post/' + $stateParams.id);
          }
        }
      });

      $urlRouterProvider.otherwise('/top'); //default route
  });
