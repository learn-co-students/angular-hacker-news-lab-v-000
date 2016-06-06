angular
    .module('app', ['ui.router', 'ngSanitize'])
    .config(function($stateProvider,  $urlRouterProvider){
      $stateProvider
        .state('top', {
          url: '/top',
          templateUrl: 'templates/stories.html',
          controller: 'StoriesController as ctrl',
          resolve: {
              topStories: function (storyService) {
                  return storyService.getStories();
              }
          }
        })
        .state('post', {
          url: '/post/:id',
          templateUrl: 'templates/story.html',
          controller: 'StoryController as ctrl',
          resolve: {
              story: function (storyService, $stateParams) {
                 return storyService.getSingleStory($stateParams.id);
              }
          }
        });
        $urlRouterProvider.otherwise("/top");

    });