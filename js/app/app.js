function UiRouter($stateProvider) {
  $stateProvider
    .state('top', {
      url: '/top',
      templateUrl: 'js/app/views/top-stories.html',
      controller: 'TopStoriesController as top',
      resolve: {
        posts: function(PostsService) {
          return PostsService.getTopStories();
        }
      }
    })
    .state('post', {
      url: '/post/:id',
      templateUrl:'js/app/views/post.html',
      controller: 'PostController as post',
      resolve: {
        post: function($stateParams, PostsService) {
          return PostsService.getPost($stateParams.id);
        }
      }
    });
}

angular
  .module('app', ['ui.router','ngSanitize'])
  .config(UiRouter);