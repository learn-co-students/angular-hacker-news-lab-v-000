angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config(function($stateProvider) {
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'index.html',
        controller: 'NewsController as news',
        resolve: {
          news: function (NewsService) {
            return NewsService.getNews()
            // return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
          }
        }
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: 'index.html',
        controller: 'NewsController as news',
        resolve: {
          news: function ($http, $stateParams) {
            return $http.get('https://hacker-news.firebaseio.com/v0/item/'+$stateParams.id+'.json');
          }
        }          
      })
  })
