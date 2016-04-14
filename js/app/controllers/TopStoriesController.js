function TopStoriesController (posts) {

  var ctrl = this;

  this.posts = posts.data;

  this.currentPage = 0

  this.nextPage = function(){
    ctrl.currentPage ++;
    ctrl.page();
  };

  this.previousPage = function(){
    ctrl.currentPage --;
    ctrl.page();
  };

  this.page = function(){
    var pageCount = ctrl.currentPage * 30;
    return this.posts.slice(pageCount, pageCount + 30)
  };

  this.page();

}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);