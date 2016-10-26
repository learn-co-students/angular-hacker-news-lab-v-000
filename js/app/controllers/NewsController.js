function NewsController(top) {
	POST_PER_PAGE = 30; 

	var vm = this;
	vm.pageStart = 0;
	vm.totalPages = top.data.length / POST_PER_PAGE;	

	vm.paginate = function() {
		vm.posts = top.data.slice(vm.pageStart * POST_PER_PAGE, (vm.pageStart + 1) * POST_PER_PAGE);		
	}

	vm.nextPage = function() {
		vm.pageStart++;
		vm.paginate();		
	}

	vm.prevPage = function() {
		vm.pageStart--;
		vm.paginate();		
	}

	vm.paginate();	

}

angular
	.module('app')
	.controller('NewsController', NewsController);