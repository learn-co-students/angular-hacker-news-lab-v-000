angular
    .module('app', ['ui.router', 'ngSanitize'])
      .config(function($stateProvider){
        $stateProvider
          .state( 'top', {
            url: '/top',
            template: '<display-news></display-news>'
          })
          .state( 'post', {
            url: '/post/:id',
            templateUrl: 'views/post.html',
            controller: 'PostController',
            controllerAs: 'MainController',
            resolve: {
              post: function(ApiService, $stateParams){
                return ApiService.getStory($stateParams.id);
              }
            }
          });
      });
