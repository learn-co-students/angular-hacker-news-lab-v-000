function comments() {
	return {
		restrict: 'E',
		scope: {
			id: '='
		},
		controller: function(ApiService, $attrs, $scope, $sce){
			var commentCtrl = this;
			commentCtrl.id = $scope.id;
			//debugger;
			commentCtrl.load = function() {
				var promise = ApiService.getStory(commentCtrl.id);
				promise.then(function(resp){ commentCtrl.comment = resp.data; });
			};

			commentCtrl.load();
		},
		controllerAs: 'commentCtrl',
		template: [
					'<hr>',
					'<span ng-show="commentCtrl.comment.by">{{commentCtrl.comment.by}}:</span>',
					'<div class="comment">',
					'<p ng-bind-html="commentCtrl.comment.text"></p>',
					'<ul>',
					'<comments ng-repeat="subComment in commentCtrl.comment.kids" id="subComment"></comments>',
					'</ul>',
					'</div>'

	 	].join('')

	};
}

angular
	.module('app')
	.directive('comments', comments);
