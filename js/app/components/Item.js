var Comment = {
	templateUrl: 'views/comment.html',
	bindings: {
		id: '='
	},
	controller: function (PostsService) {
		var ctrl = this;
    var postId = this.id;

		PostsService
			.getSingleStory(postId)
			.then(function (res) {
				ctrl.data = res.data;
			});
	},
	controllerAs: 'comment'
};

angular
	.module('app')
	.component('comment', Comment);
