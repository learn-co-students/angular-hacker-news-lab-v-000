function TopStoriesController(stories) {
  //stories contains each story returned from http get within stories.data

  var ctrl = this;

  ctrl.page = 0;
  ctrl.storyCount = stories.data.length;

  ctrl.clipPage = function(){
    ctrl.stories = stories.data.slice(0,30);
  }
}

anuglar
  .module('app')
  .controller('TopStoriesController', TopStoriesController)
