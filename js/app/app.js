angular
    .module('app', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('top', {
                url: '/top',
                templateUrl: '/views/top.html',
                controller: 'StoryController as top',
                resolve: {
                  top: function ($routeParams, TopService) {
                    return TopService.getStories();
                    }
                }
            })
            .state('top.post', {
                url: '/post/:id',
                templateUrl: '/views/top/post.html',
                controller: 'PostController as ctrl',
                resolve: {
                    posts: function ($routeParams, TopService) {
                        return TopService.getPost();
                    }
                }
            })
    });