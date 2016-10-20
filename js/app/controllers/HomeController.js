function HomeController(stories, $filter, $http){
  var ctrl = this;
  ctrl.stories = stories.data;


  var pageNum = 1;
  ctrl.filteredList = $filter('paginationFilter')(this.stories, pageNum, 30);
  // ctrl.pageOfStories = [];

  function populateStories(){
    ctrl.pageOfStories = [];

    ctrl.filteredList.forEach(function(item, index){
      getStory(item);
    });
  }

  function getStory(id){
    $http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json')
      .then(function(response){
        ctrl.pageOfStories.push(response.data);
      });
  }

  populateStories();
  console.log(ctrl.pageOfStories);
}
