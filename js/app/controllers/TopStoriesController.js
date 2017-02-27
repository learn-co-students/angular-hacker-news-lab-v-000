function TopStoriesController(StoriesService) {
    var vm = this;
    
    vm.aName = "N";
    
    StoriesService
        .getTopStoriesIDs()
        .then(function(res) {
            vm.aName = res.data[0]; 
        });
    
}

angular
    .module('app')
    .controller('TopStoriesController', TopStoriesController);