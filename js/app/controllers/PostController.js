function PostController(post) { //post is injected from app.js resolve
	this.data = post.data;
}

angular
	.module('app')
	.controller('PostController', PostController);
