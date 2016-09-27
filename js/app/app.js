angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config(function($stateProvider, $urlRouterProvider){

    $stateProvider
    .state('top', {
      url: '/top', 
      templateUrl: 'views/top.html', 
      controller: 'TopController as top',
      resolve: {
      stories: function (TopService) {
      
          return TopService.getTop();
        }
      }
    })
  
    .state('post', {
      url: '/post/:id', 
      templateUrl: 'views/stories/post.html',
     controller: 'PostController as post',
     resolve: {
      postData: function (TopService, $stateParams) {

        return TopService.getPost($stateParams.id)

      }


     }
    })
  
   $urlRouterProvider.otherwise('/top');



  })