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
            vm.thisPageIDs = vm.topStoriesIDs.slice(0,30);
            vm.thisPageIDs.forEach(function(id, index) {
              StoriesService.getStoryByID(id).then(function(res) {
                var data = res.data;
                data.rank = index;
                vm.thisPage.push(data);
              });
            });
          });

    vm.getNextPage = function() {
      vm.counter += 30;
      vm.thisPage = [];
      vm.thisPageIDs = vm.topStoriesIDs.slice(vm.counter, vm.counter + 29);
      vm.thisPageIDs.forEach(function(id, index) {
        StoriesService.getStoryByID(id).then(function(res) {
          var data = res.data;
          data.rank = index;
          vm.thisPage.push(data);
        });
      });
    };

    vm.getPreviousPage = function() {
      vm.counter -= 30;
      vm.thisPage = [];
      vm.thisPageIDs = vm.topStoriesIDs.slice(vm.counter, vm.counter + 29);
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
