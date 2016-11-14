function TopStoriesController(stories, PostService){
  var ctrl = this;
  ctrl.currentPage = 1;
  ctrl.stories_id_array = stories.data.splice((ctrl.currentPage * 30 - 30), 30);
  ctrl.stories = stories;

  ctrl.nextPage = function(){
    ctrl.currentPage++;
    ctrl.stories_id_array = stories.data.splice((ctrl.currentPage * 30 - 30), 30);
    debugger;
  }

  ctrl.prevPage = function(){
    ctrl.currentPage--;
    ctrl.stories_id_array = stories.data.splice((ctrl.currentPage * 30 - 30), 30);
  }
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);