function TopStoriesController(posts){
	var ctrl = this;
	ctrl.page = 0

	ctrl.page= 1
	ctrl.maxPage = Math.ceil(ctrl.totalPosts / 30);

	ctrl.paginatePosts = function () {
		ctrl.posts = posts.data.slice(ctrl.page * 30, (ctrl.page + 1) * 30);
	}

	ctrl.nextPage = function() {
		if (ctrl.page < ctrl.maxPage) {
			console.log("nextPage called.")
			ctrl.page++;
			ctrl.getStoryIds();
		}
	}

	ctrl.prevPage = function() {
		if (ctrl.page > 1) {
			console.log("nextPage called.")
			ctrl.page--;
			ctrl.getStoryIds();
		}
	}
	ctrl.paginatePosts();

}

angular
	.module('app')
		.controller('TopStoriesController', TopStoriesController);
