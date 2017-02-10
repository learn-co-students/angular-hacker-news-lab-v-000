function TopStoriesController(posts) {
  //stories contains each story returned from http get within stories.data

  var ctrl = this;

  ctrl.page = 0;
  ctrl.storyCount = posts.data.length;

  ctrl.clipPage = function(){
    ctrl.posts = posts.data.slice(0,30);
  }
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController)
