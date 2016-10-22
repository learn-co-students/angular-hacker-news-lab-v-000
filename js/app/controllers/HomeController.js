function HomeController(stories, $filter){
  var ctrl = this;
  var pageNum = 1;
  ctrl.storyIDs = stories.data;
  ctrl.pageOfStoryIDs = $filter('paginationFilter')(ctrl.storyIDs, pageNum, 30);








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

  // this.previous = function(){
  //   if(pageNum > 1){
  //     pageNum -= 1;
  //   }
  //
  //   paginateStories(pageNum);
  // }

}
