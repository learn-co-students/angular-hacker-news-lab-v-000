function post() {
	return {
		restrict: 'E',
		scope: {
			id: '='
		},
		controller: function(ApiService, $attrs, $scope){
			var postCtrl = this;
			postCtrl.id = $scope.id;
			postCtrl.post = {};
			postCtrl.showComments = false;
			postCtrl.loadComments = function(){

			}

			postCtrl.loadPost = function() {
				var promise = ApiService.getStory(postCtrl.id);
				promise.then(function(resp){ postCtrl.post = resp.data; });
			};

			postCtrl.loadPost();
		},
		template: [
		 		'<li>',
					'<a class="post__title" href="{{postCtrl.post.url}}">{{postCtrl.post.title}}</div>',
					'<div class="post__description">{{postCtrl.post.text | limitTo: 100}} </div>',
					'<a ui-sref="post({id: postCtrl.post.id})" class="show__comments">({{postCtrl.post.descendants}} comments | {{postCtrl.post.score}} points)</a>',
				'</li>'
	 	].join(''),
		controllerAs: 'postCtrl'
	};
}

angular
	.module('app')
	.directive('post', post);
