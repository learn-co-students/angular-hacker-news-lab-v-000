angular
.module('app', ['ui.router'])
.config(function($stateProvider) {
  $stateProvider
  .state('top', {
    url: '/top',
    templateUrl: 'views/top.html',
    controller: 'TopController as topctrl',
    resolve: {
      top: function($http, $stateParams) {
        //complete resolve
      }
    }
  })
  .state('post', {
    url:'/post/:id',
    templateUrl: 'views/post.html',
    controller: 'PostController as postctrl',
    resolve: {
      top: function($http, $stateParams) {
        //complete resolve
      }
    }
  })
});
