function TopStoriesController(TopStoriesService) {
  console.log("TopStoriesController.js");
  var ctrl = this;
  ctrl.topStories = [];
  ctrl.storiesChunk = [];


  this.populateTopStories = function() {
    topStories = TopStoriesService.getTopStories().then(function(results) {
      ctrl.topStories = results.data;
    });
  };

  this.getChunk = function(page) {
    //we've got a page of stories requested which is an array of ids.  
    //send each id to the getStory
    //function of the TopStoriesService to get the individual story.  append
    //that to the storiesChunk array. 
    debugger;

  }

  this.populateTopStories();
  debugger;
  this.getChunk(ctrl.topStories.slice(1,3));

}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);

