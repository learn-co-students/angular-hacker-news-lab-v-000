function PostController(post, ApiService, $stateParams){
	var ctrl = this;
	ctrl.post = post.data;
	ctrl.post.id = $stateParams.id;
}

angular
	.module('app')
	.controller('PostController', PostController);
