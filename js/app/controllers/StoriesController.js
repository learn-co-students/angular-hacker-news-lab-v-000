function StoriesController(stories){
  this.topStories = stories
  // --This should slice out 30 at a time
  // --Gonna be using a filter on this, probably
  // --directive tied to "next page"  
// debugger;
  this.message="this is the message from StoriesController"

}

angular
    .module('app')
    .controller('StoriesController', StoriesController)