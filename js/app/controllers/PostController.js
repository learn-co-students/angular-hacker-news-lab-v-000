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
      return vm.story = data.data;
    });   
  }
}

angular
  .module('app')
  .controller('PostController', PostController);