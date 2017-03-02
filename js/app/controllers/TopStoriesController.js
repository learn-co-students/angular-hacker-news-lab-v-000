function TopStoriesController(StoriesService) {
    var vm = this;
    vm.topStoriesIDs = [];
    vm.thisPageIDs = [];
    vm.thisPage = [];
    vm.counter = 1;

    StoriesService
        .getTopStoriesIDs()
        .then(function(res) {
            vm.topStoriesIDs = res.data;
            loadPage(0, 30);
          });

    vm.getNextPage = function() {
      vm.counter += 30;
      vm.thisPage = [];
      loadPage(vm.counter, vm.counter + 29);
    };

    vm.getPreviousPage = function() {
      vm.counter -= 30;
      vm.thisPage = [];
      loadPage(vm.counter, vm.counter + 29);
    };

    function loadPage(start, end) {
      vm.thisPageIDs = vm.topStoriesIDs.slice(start,end);
      vm.thisPageIDs.forEach(function(id, index) {
        StoriesService.getStoryByID(id).then(function(res) {
          var data = res.data;
          data.rank = index;
          vm.thisPage.push(data);
        });
      });
    };
}

angular
    .module('app')
    .controller('TopStoriesController', TopStoriesController);
