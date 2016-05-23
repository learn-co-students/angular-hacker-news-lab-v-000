angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('posts', {
        url: '/',
        templateUrl: "views/posts.html",
        controller: "BasicController"
        // controller: "BasicController as posts",
        // resolve: {
        //   posts: function(BasicService, $stateParams) {
        //     return {value: $stateParams.id}
            // i suppose i can just pass the $stateparams value to the controller
            // return BasicService.stories()
        //   }
        // }
        // template: "i am the template"
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: 'views/post.html',
        controller: "OtherController as post",
        resolve: {
          post: function(BasicService, $stateParams) {
            return BasicService.story($stateParams.id);
          }
        }
      })
      .state('pages', {
        url: '/pages/:id',
        templateUrl: 'views/posts.html',
        controller: "PagesController as pages",
        resolve: {
          pages: function(BasicService, $stateParams) {
            return {params: $stateParams.id};
          }
        }
      });
  });