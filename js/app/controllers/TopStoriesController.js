function TopStoriesController(stories, PostService){
  var ctrl = this;
  ctrl.currentPage = 1;
  ctrl.stories_id_array = stories.data.slice(ctrl.currentPage * 30 - 30, ctrl.currentPage * 30);
  ctrl.stories = stories;
  ctrl.totalStoriesCount = ctrl.stories.data.length;

  ctrl.nextPage = function(){
    if ((ctrl.currentPage * 30 - 30) < ctrl.totalStoriesCount){
      ctrl.currentPage++;
      ctrl.stories_id_array = stories.data.slice(ctrl.currentPage * 30 - 30, ctrl.currentPage * 30);
    }
  }

  ctrl.prevPage = function(){
    if (ctrl.currentPage > 1) {
      ctrl.currentPage--;
      ctrl.stories_id_array = stories.data.slice(ctrl.currentPage * 30 - 30, ctrl.currentPage * 30);
    }
  }
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);