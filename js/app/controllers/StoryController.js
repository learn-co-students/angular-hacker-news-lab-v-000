function StoryController($stateParams) {
  var vm = this;

  vm.id = $stateParams.id;

  StoriesService
    .getStoryByID(vm.id)
    .then(function(res) {
      
    })
}

angular
  .module('app')
  .controller('StoryController', StoryController);
