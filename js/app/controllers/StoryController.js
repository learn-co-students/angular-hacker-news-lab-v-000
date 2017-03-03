function StoryController($stateParams, StoriesService) {
  var vm = this;

  vm.id = $stateParams.id;
  vm.data;

  StoriesService
    .getStoryByID(vm.id)
    .then(function(res) {
      vm.data = res.data;
    })
}

angular
  .module('app')
  .controller('StoryController', StoryController);
