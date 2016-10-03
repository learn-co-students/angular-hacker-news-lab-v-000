angular
    .module('app', ['ui.router', 'ngSanitize', 'angularUtils.directives.dirPagination'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('top', {
                url: '/top',
                templateUrl: 'views/posts.html',
                controller: 'HomeController as vm'
            })
            .state('post', {
                url: '/post/:id',
                templateUrl: 'views/post.html',
                controller: 'PostController as vm'
            })
        $urlRouterProvider.otherwise('/top')
    });
