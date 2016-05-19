function PostController(post) { //post is injected from app.js resolve
	this.data = post.data; //sets this controller's data variable to post's data being recieved
}

angular
	.module('app')
	.controller('PostController', PostController);
