angular
	.module('app')
	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state('top', {
			url: '/top',
			templateUrl: 'views/top.html',
			controller: 'TopStoriesController as top',
			resolve: {
				storyIds: function (NewsService) {
					return NewsService.getTopStoriesIds();
				}
			}

		}).state('post', {
			url: '/post/:id',
			templateUrl: 'views/story.html',
			controller: 'StoryController as story',
			resolve: {
				story: function (NewsService, $stateParams) {
					return NewsService.getStory($stateParams.id);
				}
			}
		});

		$urlRouterProvider.otherwise('/top');
	})
