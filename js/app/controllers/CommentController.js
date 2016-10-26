function CommentController(NewsService) {
	var vm = this;

	NewsService.getPost(vm.obj).then(function(res) {
			vm.data = res.data;
			vm.author = vm.data.by + ' says:'
	});
}

angular
	.module('app')
	.controller('CommentController', CommentController);