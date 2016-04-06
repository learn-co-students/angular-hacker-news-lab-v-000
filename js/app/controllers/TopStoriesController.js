var STORIES_PER_PAGE = 30;

function TopStoriesController(stories) {
  ctrl = this;
  //ctrl.stories = stories.data;

  ctrl.page = 0;
  ctrl.totalStories = stories.data.length;
  ctrl.totalPages = Math.ceil(control.totalStories / STORIES_PER_PAGE);

  ctrl.paginateStories = function() {
    ctrl.stories = stories.data.slice(ctrl.page * STORIES_PER_PAGE, (ctrl.page + 1) * STORIES_PER_PAGE);
  };

  ctrl.nextPage = function() {
    ctrl.page++;
    ctrl.paginateStories();
  };

  ctrl.previousPage = function() {
    ctrl.page--;
    ctrl.paginateStories();
  };

  ctrl.paginateStories();
}


angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);