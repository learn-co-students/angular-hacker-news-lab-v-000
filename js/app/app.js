angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/top');

  $stateProvider
        .state('top', {
          url: '/top',
          templateUrl: 'views/top-news.html',
          controller: 'NewsController',
          controllerAs: 'top',
          resolve: {
            posts: function(NewsService){
                return NewsService.getTopStories();
            }
          }
        })
        .state('post', {
          url: '/post/:id',
          templateUrl: 'views/story.html',
          controller: 'StoryController',
          controllerAs: 'post',
          resolve: {
            post: function(NewsService, $stateParams) {
                return NewsService.getStory($stateParams.id);
            }
          }
        })
});
