function TopStoriesController(TopStoriesService) {
  console.log("TopStoriesController.js");
  var topStories = [];

  this.populateTopStories = function() {
    var topStories = TopStoriesService.getTopStories();
    //need to iterate and do something
  };

  debugger;
//  this.populateTopStories();

}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);

