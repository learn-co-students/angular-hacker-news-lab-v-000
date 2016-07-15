function TopStoriesController(stories){
  var ctrl = this;
  var posts_per_page = 30;
  ctrl.totalPages = Math.ceil(stories.data.length/posts_per_page);
  ctrl.pageNumber = 0;

  ctrl.createPage = function(){
    var startPage = this.pageNumber * 30;
    var endPage = startPage + 30;
    ctrl.currentPage = stories.data.slice(startPage, endPage)
  }

  ctrl.nextPage = function() {
    ctrl.pageNumber ++;
    ctrl.createPage();
  }

  ctrl.previousPage = function(){
    ctrl.pageNumber --;
    ctrl.createPage();
  }

  ctrl.createPage();

}

angular
        .module('app')
        .controller("TopStoriesController", TopStoriesController);
