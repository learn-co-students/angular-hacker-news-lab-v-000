angular
  .module('app', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('top', {
				url: '/top',
				templateUrl: 'javascript/app/templates/top.html',
				controller: 'MainCtrl as ctrl',
				resolve: {
					articles: function(ArticleService) {
            ArticleService.getAll();
					}
				}
			})
      .state('article', {
        url: '/article/:id',
        templateUrl: 'javascript/app/templates/show.html',
        controller: 'MainCtrl as ctrl',
        resolve: {
          article: function(ArticleService, $stateParams) {
            ArticleService.getArticle($stateParams.id);
          }
        }
      });
    $urlRouterProvider.otherwise('/top');
  });
