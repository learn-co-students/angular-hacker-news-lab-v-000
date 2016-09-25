function PostsController(HttpService) {
  var vm = this;

  vm.name = "hello";

  vm.topStoryIds;
  vm.topStories = [];
  vm.pages;
  vm.currentPage = 1;

  vm.nextPage = function(){
    return HttpService.getTopStories().then(function(data){
      var stories = data.data; 
      vm.currentPage += 1;
      vm.topStoryIds = stories.slice((vm.topStories.length * vm.currentPage),(vm.topStories.length * vm.currentPage) + 30)
      vm.topStories = [];
      getTopStories(vm.topStoryIds);
    });
  }

  vm.previousPage = function(){
    return HttpService.getTopStories().then(function(data){
      var stories = data.data; 
      if (vm.currentPage > 1) {
        vm.currentPage -= 1
      }
      vm.topStoryIds = stories.slice((vm.topStories.length * vm.currentPage) - 30,(vm.topStories.length * vm.currentPage))
      vm.topStories = [];
      getTopStories(vm.topStoryIds);
    });
  }

  activate();

  function activate(){
    getTopStoryIds();
  }

  function getTopStoryIds(){
    return HttpService.getTopStories().then(function(data){ 
      var stories = data.data;
      vm.pages = Math.ceil(stories.length / 30) ; 
      vm.topStoryIds = stories.slice(0,30)
      getTopStories(vm.topStoryIds);
    })    
  }

  function getTopStories(storyIds) {
    for (var i = 0 ; i < storyIds.length; i++){
      HttpService.getStory(storyIds[i]).then(function(data){ 
        vm.topStories.push(data.data);
      });
    }
  }

}

angular
  .module('app')
  .controller('PostsController', PostsController);