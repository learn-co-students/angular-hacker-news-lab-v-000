angular
  .module('app', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('top', {
            url: '/top',
            templateUrl: 'views/top.html',
            controller: 'MainController as ctrl'
          })
        .state('post', {
      			url: '/post',
      			templateUrl: 'views/post.html',
      			controller: 'PostController as post',
      		});

      	   $urlRouterProvider.otherwise('/top');
        });
