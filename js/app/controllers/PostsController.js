function PostsController(HttpService, DateService) {
  var vm = this;

  vm.topStoryIds;
  vm.topStories = {};
  vm.allStories = {};
  vm.currentPage = 1;

  activate();

  function activate(){
    getTopStoryIds();
  }

  function getTopStoryIds(){
    return HttpService.getTopStoryIds().then(function(data){ 
      vm.allStories = data.data;
      vm.pages = Math.ceil(vm.allStories.length / 30) ; 
      vm.allStories = getStoryPages(vm.allStories);
      vm.topStoryIds = vm.allStories[vm.currentPage-1];
      getTopStories(vm.topStoryIds);
    })    
  }

  function getTopStories(storyIds) {
    vm.topStories = {};
    for (var i = 0 ; i < storyIds.length; i++){
      HttpService.getItem(storyIds[i]).then(function(data){ 
        var story = data.data;
        vm.topStories[story.id] = (story);
        vm.topStories[story.id].time = DateService.unixTimeConverter(story.time)
      });
    }
  }

  function getStoryPages(storyIds){
    array = [];
    for (var i = 0; i < storyIds.length; i += 30 ){
      var subArray = storyIds.slice(i, i+30)
      array.push(subArray);
    }
    console.log(array)
    return array;
  }

  vm.nextPage = function(){
    if (vm.currentPage < vm.allStories.length){
      vm.currentPage += 1;
      pageChange();
    }
  }

  vm.previousPage = function(){
    if (vm.currentPage > 1){
      vm.currentPage -= 1;
      pageChange();
    }
  }

  function pageChange(){
    console.log(vm.currentPage)
    vm.topStoryIds = vm.allStories[vm.currentPage-1];
    getTopStories(vm.topStoryIds);
  }


}

angular
  .module('app')
  .controller('PostsController', PostsController);