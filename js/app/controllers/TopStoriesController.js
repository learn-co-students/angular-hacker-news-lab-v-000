function TopStoriesController(posts) {
	var ctrl = this;
	var posts_per_page = 30;

	ctrl.total_pages = Math.ceil(posts.data.length/posts_per_page)
	ctrl.page = 0;

	ctrl.paginate = function() {
		ctrl.posts = posts.data.slice(ctrl.page*posts_per_page, (ctrl.page+1)*posts_per_page)
	};

	ctrl.next = function() {
		ctrl.page++;
		ctrl.paginate()
	};

	ctrl.previous = function() {
		ctrl.page--;
		ctrl.paginate()
	};

	ctrl.paginate();

}

angular
	.module('app')
	.controller('TopStoriesController', TopStoriesController);