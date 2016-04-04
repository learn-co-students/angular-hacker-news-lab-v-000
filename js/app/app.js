angular
  .module('app', ['ui.router','ngSanitize'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'js/app/views/top_stories.html',
        controller: 'NewsController as news',
        resolve: {
          news: function(NewsService){
            return NewsService.getStories();
          }
        }
      })
      .state('post', {
        url: '/post/:id',
        controller: "PostController as post",
        templateUrl: 'js/app/views/post.html',
        resolve: {
          story: function($stateParams, NewsService){
            return NewsService.getArticle($stateParams.id);
          }
        }
      });

    $urlRouterProvider.otherwise('/top');
  })
