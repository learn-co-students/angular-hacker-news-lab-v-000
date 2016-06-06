function ShowStory(){
  return {
    restrict: 'E',
    templateUrl: 'views/story.html',
    scope: {
      story: '@'
    },
    controller: ['$scope', 'StoryService', function($scope, StoryService) {

      var ctrl = this;
      ctrl.story = $scope.story;
      
      StoryService
        .getStoryById(ctrl.story)
        .then(function (res) {
          ctrl.story = res.data;
        });

    }],
    controllerAs: 'ctrl'
  };
}

angular
  .module('app')
  .directive('showStory', ShowStory)