angular
  .module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('news', {
        url: '/',
        templateUrl: 'js/app/views/top_stories.html',
        controller: 'NewsController as news',
        resolve: {
          news: function(NewsService){
            return NewsService.getStories();
          }
        }
      })
      .state('article', {
        url: '/article/:id',
        controller: "ArticleController as article",
        templateUrl: 'js/app/views/article.html',
        resolve: {
          item: function($stateParams, NewsService){
            return NewsService.getArticle($stateParams.id);
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  })
