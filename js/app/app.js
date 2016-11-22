angular
  .module('app', ['ui.router', 'ngSanitize'])
	.config(function ($stateProvider) {
		$stateProvider
			.state('top', {
				url: '/top',
				templateUrl: 'js/app/views/top-stories.html',
				controller: 'TopStoriesController as top',
				resolve: {
					posts: function (PostService) {
						return PostService.getTopStories();
					}
				}
			})
			.state('post', {
				url: '/post/:id',
				templateUrl: 'js/app/views/post.html',
				controller: 'PostController as post',
				resolve: {
					post: function (PostService, $stateParams) {
						return PostService.getPost($stateParams.id);
					}
				}
			})
	});