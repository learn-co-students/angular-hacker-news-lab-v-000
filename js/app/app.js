angular
  .module('app', ['ui.router'])
	.config(function ($stateProvider) {
		$stateProvider
			.state('top', {
				url: '/top',
				templateUrl: 'js/app/views/top.html',
				controller: 'TopStoriesController as ctrl',
        resolve: {
          top: function (TopNewsService) {
            return TopNewsService.getTopStories();
          }
        }
			})
      .state('post', {
        url:'/post/:id',
        templateUrl: 'js/app/views/post.html',
        controller: 'DisplayNewsController as dc'

      });
  });
