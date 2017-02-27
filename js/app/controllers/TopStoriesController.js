function TopStoriesController(StoriesService) {
    var vm = this;
    vm.topStoriesIDs = [];
    vm.topStoriesInfo = [];
    vm.aStory;
    
    StoriesService
        .getTopStoriesIDs()
        .then(function(res) {
            vm.topStoriesIDs = res.data;
            var one = vm.topStoriesIDs[0]
            vm.topStoriesIDs.forEach(function(id) {
                StoriesService.getStoryByID(id).then(function(res) {
                    vm.topStoriesInfo.push(res.data);
                });
            });
            console.log(vm.topStoriesInfo);
        });
}

angular
    .module('app')
    .controller('TopStoriesController', TopStoriesController);