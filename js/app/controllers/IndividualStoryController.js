function IndividualStoryController(story,$scope) {
  var ctrl = this;
  ctrl.data = story.data;
  var buttonCount = 0;

  $scope.commentStyle = "display: none;"
  $scope.buttonText = "show comments";

  $scope.showComments = function() {
    if (buttonCount == 0) {
      $scope.commentStyle = "display:inline;";
      $scope.buttonText = "hide comments";
      buttonCount += 1;
    } else if (buttonCount == 1) {
      $scope.commentStyle = "display: none;";
      $scope.buttonText = "show comments";
      buttonCount -=1;
    }
   }

}


angular
  .module('app')
  .controller('IndividualStoryController', IndividualStoryController);
