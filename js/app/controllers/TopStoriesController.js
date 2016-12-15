var ppp = 30;

function TopStoriesController(posts) {
	var vm = this;

	vm.page = 0;
	vm.totalPosts = posts.data.length;
	vm.totalPages = Math.ceil(vm.totalPosts / ppp);

	vm.paginatePosts = function () {
		vm.posts = posts.data.slice(vm.page * ppp, (vm.page + 1) * ppp);
	};

	vm.nextPage = function () {
		vm.page++;
		vm.paginatePosts()
	};

	vm.previousPage = function () {
		vm.page--;
		vm.paginatePosts();
	};

	vm.paginatePosts();
}

angular
	.module('app')
	.controller('TopStoriesController', TopStoriesController);