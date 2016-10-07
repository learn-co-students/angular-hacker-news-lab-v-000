var stories_per_page = 30;

function TopStoriesController(stories) {
  var ctrl = this;
  
  ctrl.page = 0;
  ctrl.totalStories = stories.data.length;
  ctrl.totalPages = Math.ceil(ctrl.totalStories / stories_per_page);
  
  ctrl.paginateStories = function () {
    ctrl.stories = stories.data.slice(ctrl.page * stories_per_page, (ctrl.page + 1) * stories_per_page);
  };
  
  ctrl.nextPage = function () {
    ctrl.page++;
    ctrl.paginateStories();
  };
  
  ctrl.previousPage = function() {
    ctrl.page--;
    ctrl.paginateStories();
  }
  
  ctrl.paginateStories();
}

app.controller('TopStoriesController', TopStoriesController);
