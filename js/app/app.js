angular
    .module('app', ['ui.router'])
    .controller('TopController', ['TopService', function (TopService) {}])
    .config(function ($stateProvider) {
        $stateProvider
            .state('top', {
                url: '/top',
                templateUrl: '/views/top.html',
                controller: 'TopController as stories',
                resolve: {
                  stories: function ($routeParams, TopService) {
                    return TopService.getStories();
                    }
                }
            })
            .state('post', {
                url: '/post/:id',
                templateUrl: '/views/post.html',
                controller: 'PostController as ctrl',
                resolve: {
                    posts: function ($routeParams, TopService) {
                        return TopService.getPost();
                    }
                }
            })
    });