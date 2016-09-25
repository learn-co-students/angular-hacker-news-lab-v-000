function PostsController(HttpService) {
  var vm = this;

  vm.name = "hello";

  vm.topStoryIds;
  vm.topStories = [];

  activate();

  function activate(){
    getTopStoryIds();
  }

  function getTopStoryIds(){
    return HttpService.getTopStories().then(function(data){ 
      vm.topStoryIds = data.data;
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