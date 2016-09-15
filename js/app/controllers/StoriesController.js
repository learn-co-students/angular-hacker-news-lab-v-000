function StoriesController(stories) {

  var vm = this;

  vm.page = 0;
  vm.stories_per_page = 30;
  vm.totalStories = stories.data.length;
  vm.totalPages = Math.ceil(vm.totalStories/vm.posts_per_page);

  vm.paginateStories = function() {
    vm.stories = stories.data.slice(vm.page*vm.stories_per_page, (vm.page+1)*vm.stories_per_page);
  };

  vm.nextPage = function() {
    vm.page +=1;
    vm.paginateStories()
  };

  vm.previousPage = function() {
    vm.page -=1;
    vm.paginateStories()
  };

  vm.paginateStories(); 
}

angular
  .module('app')
  .controller('StoriesController', StoriesController);