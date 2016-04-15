hackerNewsApp.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/top');

  $stateProvider
    .state('top', {
      url: '/top',
      templateUrl: 'views/topStories.html',
      controller: 'TopStoriesController as top',
      resolve: {
        stories: function(StoriesService){
          return StoriesService.getStories();
        }
      }
    })

    .state('post', {
      url: '/post/:id',
      templateUrl: 'views/post.html',
      controller: 'PostController as post',
      resolve: {
        post: function($stateParams, StoriesService){
          return StoriesService.getDetails($stateParams.id);
        }
      }
    });
})