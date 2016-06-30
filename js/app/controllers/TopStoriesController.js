function TopStoriesController(NewsService, storyIds) {
	
	var POSTS_PER_PAGE = 30
	
	var ctrl = this;
	
	ctrl.totalPosts = storyIds.data.length;
	ctrl.totalPages = Math.ceil(ctrl.totalPosts / POSTS_PER_PAGE)
	ctrl.page = 0
	
	ctrl.paginate = function() {
		ctrl.stories = storyIds.data.slice(ctrl.page * POSTS_PER_PAGE, (ctrl.page + 1) * POSTS_PER_PAGE)
	}

	ctrl.next = function() {
		ctrl.page++;
		ctrl.paginate();
	}

	ctrl.prev = function() {
		ctrl.page--;
		ctrl.paginate();
	}

	ctrl.paginate();
	
}

angular
	.module('app')
	.controller('TopStoriesController', TopStoriesController)