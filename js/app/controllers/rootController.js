function RootController(TopStories, $filter){
  var ctrl = this;
  getStories();
  // getStory(1273640);







//create filter\
  //filter should slice array into 30s
  //need method that iterates through filtered list and produces and converts story ids to actually storys.
//create method that takes page number and uses filter
//end result is a filteredList of actual stores
//need ng-preat="story in pageOfStories."
//this.pageOfStories = [{}, {}, {}] *30
//getPageOfStories = function(){} forEach id in filteredList return data object(use getStory)
//filteredList = $filter('someFilter')(ctrl.stories, pageNum)
//someFilter => takes page number from pagination button and slices array based on that number
    //(ex. 3 we want index 59-89... pgNum (1  * 30) - 30 => starting index, slice 30) array.slice(index, index + 30)
  this.collection = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
  var pageNum = 1;
  ctrl.filteredList = $filter('paginationFilter')(this.collection, pageNum, 2);


  function getStories(){
    return TopStories.getStories()
      .then(function(data){
        return ctrl.stories = data;
      });
  }

  function getStory(id){
    return TopStories.getStory(id)
      .then(function(data){
        console.log(data);
        return ctrl.story = data;
      });
  }
}

angular
  .module('app')
  .controller('rootController', RootController);
