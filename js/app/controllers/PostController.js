function PostController(post) {
	this.data = post.data;
}

angular
	.module('app')
	.controller('UserController', UserController);
