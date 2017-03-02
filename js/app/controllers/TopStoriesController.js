function TopStoriesController(StoriesService) {
    var vm = this;
    vm.topStoriesIDs = [];
    vm.thisPageIDs = [];
    vm.thisPage = [];
    vm.counter = 31;

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

    vm.getPage = function() {

    };
}

angular
    .module('app')
    .controller('TopStoriesController', TopStoriesController);
