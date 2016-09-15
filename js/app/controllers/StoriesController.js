function StoriesController(stories, StoriesService) {

  var vm = this;
  vm.stories = stories.data;

}

angular
  .module('app')
  .controller('StoriesController', StoriesController);