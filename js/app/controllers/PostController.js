function PostController(HttpService, $state, $stateParams) {
  var vm = this;

  vm.story;

  vm.id = $stateParams.id

  activate();

  function activate(){
    getStory(vm.id);
  }

  function getStory(id){
    return HttpService.getStory(id).then(function(data){ 
      vm.story = data.data;
      debugger
    })    
  }

}

angular
  .module('app')
  .controller('PostController', PostController);