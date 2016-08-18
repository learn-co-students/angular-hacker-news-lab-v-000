(function() {
'use strict';

  angular
    .module('app')
    .controller('TopStoriesController', TopStoriesController);

  TopStoriesController.$inject = ['TopStoriesService', '$scope', '$stateParams', '$location', 'stories'];
  function TopStoriesController(TopStoriesService, $scope, $stateParams, $location, stories) {
    var vm = this;
    

    activate();

    ////////////////

    function activate() {
      vm.stories = stories.data;
      $scope.currentPage = $stateParams.page || 1;
      $scope.updatePage = updatePage;
      vm.start = 30 * ($scope.currentPage - 1) + 1;

      // TopStoriesService 
      //   .getStories()
      //   .then(function(res) {
      //     vm.stories = res.data;
      //   });
        
      // function updatePage(newPageNumber, oldPageNumber) {
      //   $location.path(newPageNumber);
      //   vm.start = 30 * (newPageNumber - 1) + 1;
      // }

      function updatePage(newPageNumber, oldPageNumber) {
        // $location.url('top?page=' + newPageNumber);
        vm.start = 30 * (newPageNumber - 1) + 1;
      }

    }
  }

})();