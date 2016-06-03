angular
    .module('app', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider){
        $stateProvider
            // .state('home', {
            //     url: '/',
            //     templateUrl: 'index.html',
            //     controller: 'StoriesController as stories'
            // })

            .state('top', {
                url: '/top',
                templateUrl: 'views/topstories.html',
                controller: 'StoriesController as stories',
//                 resolve: {
//                     stories: function(ApiService){
// debugger;
//                           return ApiService.getTop()
//                     },
//                 }
            })

            .state('post', {
                url: '/post/:id',
                templateUrl: 'views/post.html',
                controller: 'StoriesController as stories'
            })


        $urlRouterProvider.otherwise('/')

    })