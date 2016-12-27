(function() {
'use strict';

  angular
    .module('app')
    .controller('TopStoriesController', TopStoriesController);

  TopStoriesController.$inject = [];
  function TopStoriesController() {
    var vm = this;
    

    activate();


    function activate() {
      vm.stories = ['Story 1, by Jbok', 'Story 2, by JCiringione']

    }
  }

})();