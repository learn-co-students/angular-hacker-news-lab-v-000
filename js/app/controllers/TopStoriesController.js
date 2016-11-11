function TopStoriesController(stories, PostService){
  var ctrl = this;
  ctrl.stories_id_array = stories.data;
  ctrl.currentPage = 1;

  ctrl.nextPage = function(){}
  ctrl.prevPage = function(){}
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);