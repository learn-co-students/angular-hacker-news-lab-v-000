angular
  .module('app', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('top', {
				url: '/top',
				templateUrl: 'javascript/app/views/TopStoies.html',
				controller: 'TopStoriesController as ctrl',
				resolve: {
					articles: function(PostsService) {
            PostsService.getAll();
					}
				}
			})
      .state('post', {
        url: '/post/:id',
        templateUrl: 'views/post.html',
        controller: 'PostController as post',
        resolve: {
          post: function ($stateParams, PostsService) {
            return PostsService.getPost($stateParams.id);
          }
        }
      });
    $urlRouterProvider.otherwise('/top');
  });
