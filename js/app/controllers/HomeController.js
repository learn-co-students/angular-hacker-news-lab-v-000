function HomeController(stories, $filter, $http){
  var ctrl = this;
  ctrl.stories = stories.data;


  // getStories();
  // getStory(1273640);

  // console.log(ctrl.stories);





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
  // this.collection = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

  var pageNum = 1;
  ctrl.filteredList = $filter('paginationFilter')(this.stories, pageNum, 2);
  // ctrl.pageOfStories = [];

  function populateStories(){
    ctrl.pageOfStories = [];

    ctrl.filteredList.forEach(function(item, index){
      getStory(item);
    });
  }

  // function getStories(){
  //   return TopStories.getStories()
  //     .then(function(data){
  //       return ctrl.stories = data;
  //     });
  // }

  function getStory(id){
    $http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json')
      .then(function(data){
        ctrl.pageOfStories.push(data);
      });
  }

  populateStories();
}
