angular
    .module('app', [
	    'ui.router',
	    'ngSanitize'
    ])
  	.config(function ($stateProvider, $urlRouterProvider) {
  		$stateProvider
            .state('top', {
                url: '/top',
                templateUrl: 'views/top-stories.html',
                controller: 'StoriesController as top',
                resolve: {
                  posts: function (fetcher) {
                    return fetcher.getTopStories();
                  }
                }
            })
            .state('post', {
                url: '/post/:id',
                templateUrl: 'views/post.html',
                controller: 'SettingsController as post',
                resolve: {
                post: function ($stateParams, fetcher) {
                  return fetcher.getPost($stateParams.id);
                 }
                }

            })

            $urlRouterProvider.otherwise('/top');

    });
