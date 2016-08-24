angular
    .module('app', ['ui.router', 'ngSanitize'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('top', {
                url: '/top',
                templateUrl: '/views/top.html',
                controller: 'StoriesController as ctrl',
                resolve: {
                    index: function (StoriesService) {
                        return StoriesService.getIndex();
                    }
                }
            });
        $stateProvider
            .state('post', {
                url: '/post/:id',
                templateUrl: '/views/post.html',
                controller: 'StoryController as ctrl',
                resolve: {
                    story: function ($stateParams, StoriesService) {
                        return StoriesService.getStory($stateParams.id);
                    }
                }
            });
    });
