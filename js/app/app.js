angular
  .module('app', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('posts', {
        url: '/',
        templateUrl: "views/posts.html"
      })
      .state('post', {
        url: '/post/:id',
        template: 'I am a post {{single}}',
        controller: "OtherController as post",
        resolve: {
          post: function(BasicService, $stateParams) {
            return BasicService.story($stateParams.id);
            // return {value: 'simple'};
          }
        }
      })
      .state('other', {
        url: '/other',
        template: 'I am other'
      })
      .state('pages', {
        url: '/pages/:id',
        template: 'i am a page',
        controller: "BasicController as basic",
        // resolve: {
        //   basic: function(BasicService, $stateParams) {
        //     // do something
        //   }
        // }
      });
  });