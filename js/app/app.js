angular
  .module('app', ['ui.router'])
  .config(function($stateProvider) {
    $stateProvider
      .state('top', {
          url: '/top',
          templateUrl: 'views/top.html',
          controller: 'TopController as top',
          resolve: {
            posts: function(DomainService) {
              return DomainService.getIds();
            }
          }
      })
      .state('post', {
          url: '/post/:id',
          templateUrl: 'views/post.html',
          controller: 'PostController as post',
          resolve: {
            post: function($stateParams, DomainService) {
              return DomainService.getPost(11855638);
            }
          }
      });
  });
