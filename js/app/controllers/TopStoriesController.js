function TopStoriesController(posts) {
  //stories contains each story returned from http get within stories.data

  var ctrl = this;
  console.log(posts);

  ctrl.posts = posts.data

  ctrl.page = 0;
  ctrl.storyCount = posts.data.length;
  ctrl.pageCount = Math.ceil(ctrl.storyCount / 30);

  ctrl.clipPage = function(){
    ctrl.posts = posts.data.slice(ctrl.page * 30, (ctrl.page+1) * 30);
  }

  ctrl.nextPage = function(){
    ctrl.page++;
    ctrl.clipPage();
  }

  ctrl.previousPage = function(){
    ctrl.page--;
    ctrl.clipPage();
  }

  ctrl.clipPage();
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController)
