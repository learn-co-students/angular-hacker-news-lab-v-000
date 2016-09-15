function UiRouter($stateProvider) {
  $stateProvider
    .state('top', {
      url: '/top',
      templateUrl: 'js/app/views/top.html',
      controller: 'StoriesController',
      resolve: {
        stories: function(StoriesService) {
          return StoriesService.getTopStories();
        }
      }
    })
    .state('post', {
      url: '/post/:id',
      templateUrl:'js/app/views/post.html',
      controller: 'PostController',
      resolve: {
        post: function($stateParams, StoriesService) {
          return StoriesService.getStory($stateParams.id);
        }
      }
    });
}

angular
  .module('app', ['ui.router'])
  .config(UiRouter);