function TopStoriesController(TopStoriesService) {
  console.log("TopStoriesController.js");
  this.topStories = [];
  var vm = this;

  this.populateTopStories = function() {
    topStories = TopStoriesService.getTopStories().then(function(results) {
      vm.topStories = results.data;
    });
    //need to iterate and do something
  };

  this.populateTopStories();

}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);

