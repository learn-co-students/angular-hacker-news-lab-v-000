angular
	.module('app', ['ui.router', 'ngSanitize'])
	.config(function ($stateProvider) {
		$stateProvider
			.state('top', {
				url: '/top',
				templateUrl: 'views/top-stories.html',
				controller: 'NewsController as vm_top',
				resolve: {
						top: function(NewsService) {							
							return NewsService.getTopStories();						
						}
				}
		});			

		$stateProvider
			.state('post', {
				url: '/post/:id',
				templateUrl: 'views/post.html',
				controller: 'PostController as vm_post',
				resolve: {
					post: function(NewsService, $stateParams) {
						return NewsService.getPost($stateParams.id);
					}
				}
			});
	});