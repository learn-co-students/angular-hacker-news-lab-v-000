(function() {
'use strict';

  angular
    .module('app')
    .controller('StoryController', StoryController);

  StoryController.$inject = ['TopStoriesService', '$stateParams'];
    function StoryController(TopStoriesService, $stateParams) {
      var vm = this;
      vm.id = $stateParams.id;
      vm.story;
      vm.comments;
      

    activate();


    function activate() {
      
      TopStoriesService
      .getStory(vm.id)
      .then(function(res) {
        vm.story = res.data;
        vm.comments = res.data.kids;
      })

  }
}
})();