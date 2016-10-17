var app = angular.module('HackerNews',
                  [
                    'ui.router',
                    'ngSanitize'
                  ]);

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('top', {
      url: "/top",
      templateUrl: "views/top_stories.html",
      controller: "TopStoriesController as top",
      resolve: {
        posts: function (TopStories) {
          console.log('Get the top stories');
          return TopStories.getTopStories();
        }
      }
    })
    .state('post', {
      url: '/post/:id',
      templateUrl: 'views/post.html',
      controller: 'PostController as post',
      resolve: {
        post: function ($stateParams, PostsService) {
          return PostsService.getPost($stateParams.id)
        }
      }
    })
});
