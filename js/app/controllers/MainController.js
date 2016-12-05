function MainController(StoryService, IndividualStoryService, $scope) {
  var ctrl = this;
  ctrl.posts = [];
  ctrl.stories = [];
  var limitStep = 30;
  var startStep = 0;
  $scope.limit = limitStep;
  $scope.start = startStep;


  StoryService
    .getStoryIds()
    .then(function(results) {
      ctrl.posts = results.data;
      ctrl.posts.forEach(function(post) {
        IndividualStoryService
          .getIndividualStory(post)
          .then(function(res) {
            ctrl.stories.push(res.data);
          })
        });
      })

  $scope.increment = function() {
      $scope.start += limitStep;
  }


  $scope.decrement = function() {
    $scope.start -= limitStep;
  };


}





angular
  .module('app')
  .controller('MainController', MainController);
