var POST_PER_PAGE = 30;

function TopPostsController(posts) {

	var ctrl = this;
  ctrl.posts = posts.data;

	ctrl.page = 0;
	ctrl.totalPosts = posts.data.length
	ctrl.totalPages = ctrl.totalPosts / POST_PER_PAGE;

	ctrl.paginate = function() {
		ctrl.posts = posts.data.slice(ctrl.page * POST_PER_PAGE, (ctrl.page + 1) * POST_PER_PAGE);
	}

	ctrl.nextPage = function() {
		ctrl.page++;
		ctrl.paginate();
	}

	ctrl.prevPage = function() {
		ctrl.page--;
		ctrl.paginate();
	}

	ctrl.paginate();

}

angular
	.module('app')
	.controller('TopPostsController', TopPostsController);
