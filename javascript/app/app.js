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
            // PostsService.getAll();
					}
				}
			})
      .state('article', {
        url: '/article/:id',
        templateUrl: 'javascript/app/views/post.html',
        controller: 'TopStoriesController as ctrl',
        resolve: {
          article: function(PostsService, $stateParams) {
            // PostsService.getArticle($stateParams.id);
          }
        }
      });
    $urlRouterProvider.otherwise('/top');
  });
