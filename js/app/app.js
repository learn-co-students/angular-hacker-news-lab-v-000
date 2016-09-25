angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config(function($stateProvider){
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'js/app/views/top.html',
        controller: 'PostsController'
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: 'js/app/views/post.html',
        controller: 'PostController as ctrl',
        resolve: {
          story: function($stateParams, HttpService){
            return HttpService.getItem($stateParams.id).then(function(data){
              return data.data;
            });
          }
        }
      })
      .state('test', {
        url: '/test',
        templateUrl: 'js/app/views/test.html',
        controller: 'TestController as ctrl',
        resolve: {
          test: function(){
            return "hello"
          }
        }
      });
  });
  // .config(function ($httpProvider) {
  //   $httpProvider.useApplyAsync(true);
  // });
