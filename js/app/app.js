angular
  .module('app', ['ui.router'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: '/views/topstories.html',
        controller: 'TopStoriesController as ctrl',
        resolve: {
          topStories: function (TopStoriesService) {
            return TopStoriesService.getStories();
          }
        }
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: '/views/post.html',
        controller: 'PostController as ctrl',
        resolve: {
          post: function ($http, $stateParams) { // could refactor to use PostService
            return $http.get('https://hacker-news.firebaseio.com/v0/item/' + $stateParams.id + '.json');
          }
        }
      })
  });