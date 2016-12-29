(function() {
'use strict';

  angular
    .module('app')
    .controller('StoryController', StoryController);

  StoryController.$inject = ['TopStoriesService', '$stateParams'];
    function StoryController(TopStoriesService, $stateParams) {
      var vm = this;
      

    activate();


    function activate() {
      vm.id = $stateParams.id;

      TopStoriesService
      .getStory(vm.id)
      .then(function(res) {
        vm.story = res.data;
      })

  }
}
})();