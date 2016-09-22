angular
  .module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){

    $stateProvider
    .state('top', {
      url: '/top', 
      templateURL: 'views/top.html', 
      controller: 'TopController as top'
    })
  
    .state('post', {
      url: '/post/:id', 
      templateUrl: 'views/stories/post.html',
     controller: 'PostController as post'
    })

   $urlRouterProvider.otherwise('/top');



  })