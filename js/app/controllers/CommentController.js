function CommentController(IndividualStoryService) {
  var ctrl = this;

  IndividualStoryService
     .getIndividualStory(ctrl.id)
     .then(function(response) {
       ctrl.data = response.data;
     })


    var clickCount = 0;
    ctrl.buttonText = "see comments";
    ctrl.divStyle = "display: none";

    ctrl.buttonClick = function() {
      if (clickCount == 0) {
      ctrl.buttonText = "hide comments";
      ctrl.divStyle = "display: block;";
      clickCount +=1;
    } else if (clickCount == 1) {
      ctrl.buttonText = "see comments";
      ctrl.divStyle = "display: none;";
      clickCount -=1;
    }
  }

}

angular
  .module('app')
  .controller('CommentController', CommentController);
