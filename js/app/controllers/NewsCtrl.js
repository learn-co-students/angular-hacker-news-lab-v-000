function NewsCtrl(newsList) {

  var vm = this;
  var nbStoryPerPage = 30;
  vm.page = 1; // currPage won't work (no camelcase for ng-show)


  vm.displayPage = function() {
    vm.startStoryNo = vm.page*nbStoryPerPage - nbStoryPerPage + 1;
    vm.stories = newsList.data.slice(vm.startStoryNo - 1, vm.startStoryNo + nbStoryPerPage - 1);
  };
  vm.next = function() {
    vm.page++;
    console.log(vm.page);
    vm.displayPage();
  };
  vm.previous = function() {
    vm.page--;
    vm.displayPage();
  };

  vm.displayPage();
}

angular
	.module('app')
	.controller('NewsCtrl', NewsCtrl);
