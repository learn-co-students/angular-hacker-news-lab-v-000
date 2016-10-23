function HomeController(stories, $filter){
  var ctrl = this;
  var storiesPerPage = 30;

  ctrl.pageNum = 1;
  ctrl.storyIDs = stories.data;

  ctrl.previous = function(){
    if(ctrl.pageNum > 1){
      ctrl.pageNum -= 1;
    }
    setPage();
  }

  ctrl.next = function(){
    if(ctrl.pageNum < (ctrl.storyIDs.length / storiesPerPage)){
      ctrl.pageNum += 1;
    }
    setPage();
  }

  function setPage(){
    ctrl.pageOfStoryIDs = $filter('paginationFilter')(ctrl.storyIDs, ctrl.pageNum, storiesPerPage);
  }

  setPage();
}
