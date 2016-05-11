angular
  .module('app',['ui.router'])
  .config(function($stateProvider) {
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'views/topstories.html',
        controller: 'StoryController as ctrl',
        resolve: {
          story: function(StoryService) {
            return StoryService.getTopStoryIds()
              .then(function(results) {
                var content =[];
                angular.forEach(results.data, function(value) {
                  StoryService.getStoryJSONById(value)
                  .then(function(results) {
                    content.push(results.data);
                  });
                });
                return content;
              });
          }
        }
      })
      .state('post', {
        url: '/post',
        templateUrl: 'views/post.html',
        controller: 'PostController as postctrl',
      })
    });
