function PostController(post) {
	var ctrl = this;

	ctrl.post = post.data;
}

angular
	.module('app')
	.controller('PostController', PostController);