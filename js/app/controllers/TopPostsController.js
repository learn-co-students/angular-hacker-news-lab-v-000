function TopPostsController(top_stories, PostService){
  var ctrl = this;
  this.top_stories = top_stories.data;
  this.start = 0;
  this.PAGE_DIF = 30;


  this.nextable = function(){
    return (ctrl.start >= 0) && (ctrl.start < ctrl.top_stories.length - ctrl.PAGE_DIF);
  };
  this.prevable = function(){
    return (ctrl.start >= ctrl.PAGE_DIF);
  };

  this.update_top_stories = function(){
    ctrl.these_top_stories = ctrl.top_stories.slice(ctrl.start, ctrl.start + ctrl.PAGE_DIF);
    ctrl.these_top_stories.forEach(function(d,i){
      PostService.getPost(d)
        .then(function(res){
          ctrl.these_top_stories[i] = res;
        });
    });
  };

  this.update_top_stories();

  this.serveNext = function(){
    ctrl.start += ctrl.PAGE_DIF;
    ctrl.update_top_stories();
  }
  this.servePrev = function(){
    ctrl.start -= ctrl.PAGE_DIF;
    ctrl.update_top_stories();
  }
}

angular
    .module('app')
    .controller('TopPostsController', TopPostsController);
