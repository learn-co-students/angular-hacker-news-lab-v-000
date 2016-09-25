function PostsController(HttpService) {
  var vm = this;

  vm.name = "hello";

  vm.topStories;

  activate();

  function activate(){
    getStories();
  }

  function getStories(){
    return HttpService.getTopStories().then(function(data){ 
      debugger
      return vm.topStories = data.data;
    })
  }
}

angular
  .module('app')
  .controller('PostsController', PostsController);