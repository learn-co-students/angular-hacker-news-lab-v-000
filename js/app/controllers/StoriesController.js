function StoriesController(stories){
  var ctrl = this;

  var postsPerPage = 30;
  ctrl.start = 0;
  ctrl.end = postsPerPage;
  ctrl.last = stories.data.length;

  top.slicePosts = function(){
    ctrl.stories = stories.data.slice(ctrl.start, ctrl.end);
  }

  top.prevPage = function(){
    ctrl.start -= postsPerPage;
    ctrl.end -= postsPerPage;
    ctrl.slicePosts();
  }

  top.nextPage = function(){
    ctrl.start += postsPerPage;
    ctr.end += postsPerPage;
    ctrl.slicePosts();
  }

  top.slicePosts();

});

angular
  .app('app')
  .controller("StoriesController", StoriesController)
