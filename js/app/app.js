angular
	.module('app', ['ui.router'])
	.config(function($stateProvider) {
		$stateProvider
			.state('top', {
				url: "/top",
				templateUrl: "views/top.html",
				controller: "TopController as ctrl",
				resolve: {
					top: function(StoriesService) {
						return StoriesService.getTop().then(function(data){
							return data
						});
					}
				}
			})
			.state('post', {
				url: "/post/:id",
				templateUrl: "views/post.html",
				controller: "PostController as ctrl",
				resolve: {
					post: function(StoriesService, $stateParams) {
						return StoriesService.getPost($stateParams.id).then(function(data){
							return data.data
						})
					}
				}
			})
	})