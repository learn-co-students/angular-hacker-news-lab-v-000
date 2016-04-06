angular
  .module('app', ['ui-router', 'ng-sanitize'])
  .config(function ($stateProvider){
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: '/views/top-stories.html',
        controller: 'TopStoriesController as top',
        resolve: {
          stories: function (StoriesService) {
            return StoriesService.getTopStories();
          }
        }
      })
      .state('story', {
        url: '/story/:id',
        templateUrl: '/views/story.html',
        controller: 'StoryController as story',
        resolve: {
          story: function (StoriesService, $stateParams) {
            return StoriesService.getStory($stateParams.id);
          }
        }
      })

      
  });