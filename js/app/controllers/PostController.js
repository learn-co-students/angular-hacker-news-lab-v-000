function PostController(HttpService, $state, $stateParams, $sanitize) {
  var vm = this;

  vm.story;
  vm.comments = [];

  vm.id = $stateParams.id

  function getStory(id){
    return HttpService.getStory(id).then(function(data){ 
      return vm.story = data.data;
    });   
  }

  getStory(vm.id);
}

angular
  .module('app')
  .controller('PostController', PostController);