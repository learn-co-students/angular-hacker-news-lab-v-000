angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config(['$stateProvider', function ($stateProvider){
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'views/topstories.html',
        controller: 'StoriesController as ctrl',
        resolve: {
          stories: function (StoryService) {
            return StoryService.getStories();
          }
        }
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: 'views/post.html',
        controller: 'PostController as ctrl',
        resolve: {
          post: function ($stateParams, StoryService) {
            return StoryService.getStoryById($stateParams.id);
          }
        }
      });

    }]);


