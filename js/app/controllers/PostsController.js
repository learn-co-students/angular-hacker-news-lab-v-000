function PostsController(HttpService) {
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
      var stories = getStoryPages(vm.allStories);
      vm.topStoryIds = stories[vm.currentPage-1];
      getTopStories(vm.topStoryIds);
    })    
  }

  function getTopStories(storyIds) {
    for (var i = 0 ; i < storyIds.length; i++){
      HttpService.getItem(storyIds[i]).then(function(data){ 
        var story = data.data;
        vm.topStories[story.id] = (story);
        vm.topStories[story.id].time = unixTimeConverter(story.time)
      });
    }
  }

  function unixTimeConverter(unixTime){
    var date = moment.unix(unixTime)
    return date.format("dddd, MMMM Do YYYY, h:mm:ss a")
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
    return HttpService.getTopStoryIds().then(function(data){
      var stories = data.data; 
      vm.currentPage += 1;
      vm.topStoryIds = stories.slice((vm.topStories.length * vm.currentPage),(vm.topStories.length * vm.currentPage) + 30)
      vm.topStories = [];
      // console.log(vm.topStoryIds);
      getTopStories(vm.topStoryIds);
    });
  }
  vm.previousPage = function(){
    return HttpService.getTopStoryIds().then(function(data){
      var stories = data.data; 
      if (vm.currentPage > 1) {
        vm.currentPage -= 1
      }
      vm.topStoryIds = stories.slice((vm.topStories.length * vm.currentPage) - 30,(vm.topStories.length * vm.currentPage))
      vm.topStories = [];
      // console.log(vm.topStoryIds);
      getTopStories(vm.topStoryIds);
    });
  }


}

angular
  .module('app')
  .controller('PostsController', PostsController);