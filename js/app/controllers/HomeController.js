function HomeController(stories, $filter){
  var ctrl = this;
  var storiesPerPage = 30;

  ctrl.pageNum = 1;
  ctrl.storyIDs = stories.data;


  function setPage(){
    ctrl.pageOfStoryIDs = $filter('paginationFilter')(ctrl.storyIDs, ctrl.pageNum, storiesPerPage);
  }

  setPage();








  // ctrl.getStory = getStory;
  // ctrl.filteredList = $filter('paginationFilter')(this.stories, pageNum, 30);


  // console.log(getStory);

  // function populateStories(){
  //   ctrl.pageOfStories = [];
  //
  //   ctrl.filteredList.forEach(function(id, index){
  //     ctrl.getStoryData(id);
  //   });
  // }

  // function getStoryData(id){
  //   getStory(id)
  //     .then(function(response){
  //       ctrl.pageOfStories.push(response.data);
  //     });
  // }














  // var pageNum = 4;



  // function paginateStories(pageNum){
  //   ctrl.filteredList = $filter('paginationFilter')(this.stories, pageNum, 30);
  // }





  // populateStories();

  this.previous = function(){
    if(ctrl.pageNum > 1){
      ctrl.pageNum -= 1;
    }
    setPage();
    console.log('Hey');
  }

  this.next = function(){
    if(ctrl.pageNum < (ctrl.storyIDs.length / storiesPerPage)){
      ctrl.pageNum += 1;
    }
    setPage();
    console.log('Hey!');
  }

}
