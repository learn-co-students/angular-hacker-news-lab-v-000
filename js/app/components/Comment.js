var Comment = {
	bindings: {
		obj: '='
	},
	templateUrl: 'views/comment.html',
	controller: 'CommentController',
	controllerAs: 'vm_comment'
};

angular
	.module('app')
	.component('comment', Comment);