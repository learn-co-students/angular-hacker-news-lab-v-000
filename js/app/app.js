angular
    .module('app', ['ui.router', 'ngSanitize', 'angularUtils.directives.dirPagination'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('top', {
                url: '/top',
                templateUrl: 'views/posts.html',
                controller: 'HomeController as vm',
                resolve: {
                    posts: function(PostFactory) {
                        return PostFactory.getPostsIds()

                    }
                }
            })
            .state('post', {
                url: '/post/:id',
                templateUrl: 'views/post.html',
                controller: 'PostController as vm',
                resolve: {
                    post: function($stateParams, PostFactory) {
                        return PostFactory.getPost($stateParams.id)
                    }
                }
            })
        $urlRouterProvider.otherwise('/top')
    });
