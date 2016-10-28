angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config(function($stateProvider) {
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'views/posts.html',
        controller: 'NewsController',
        resolve: {
          news: function (NewsService) {
            debugger
            return NewsService.getNews();
          }
        }
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: '<div></div>',
        controller: 'PostController as post',
        resolve: {
          post: function (NewsService, $stateParams) {
            return NewsService.getPost($stateParams.id);
          }
        }          
      })
  })
