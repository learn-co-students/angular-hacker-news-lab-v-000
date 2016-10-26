function ItemController(NewsService) {
	var vm = this;	

	NewsService.getPost(vm.obj)
		.then(function(res) {
			vm.data = res.data;
			vm.data.kids ? vm.commentCount = vm.data.kids.length : vm.commentCount = 0;
		});
	
}

angular
	.module('app')
	.controller('ItemController', ItemController);