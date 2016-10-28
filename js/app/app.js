angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config(function($stateProvider) {
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'views/posts.html',
        controller: 'NewsController as news',
        resolve: {
          news: function (NewsService) {
            return NewsService.getNews();
          }
        }
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: '/views/post.html',
        controller: 'PostController as post',
        resolve: {
          post: function (NewsService, $stateParams) {
            debugger
            return NewsService.getPost($stateParams.id);
          }
        }          
      })
  })
