angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config(function($stateProvider, $urlRouterProvider ){
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'js/app/views/top.html',
        controller: 'PostsController as ctrl'
        // resolve: {
        //   posts: function($stateParams, HttpService){
        //     return HttpService.getPostIds().then(function(data){
        //       var ids = data.data;
        //       var posts = [];
        //       for (var i = 0 ; i < data.data.length ; i++) {
        //         return HttpService.getItem(ids[i]).then(function(data) {
        //           var post = data.data;
        //           posts.push(post);
        //         });
        //       }
        //       return posts;
        //     });
        //   }
        // }
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: 'js/app/views/post.html',
        controller: 'PostController as ctrl',
        resolve: {
          post: function($stateParams, HttpService){
            return HttpService.getItem($stateParams.id).then(function(data){
              return data.data;
            });
          }
        }
      });
      $urlRouterProvider.when('', '/top');
  });
  // .config(function ($httpProvider) {
  //   $httpProvider.useApplyAsync(true);
  // });
