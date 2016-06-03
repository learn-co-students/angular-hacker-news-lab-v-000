angular
    .module('app', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('home', {
                url: '/',
                templateURL: 'index.html',
                // controller: 'StoriesController as stories'
            })

            .state('top', {
                url: '/top',
                template: 'views/topstories.hmtl',
                controller: 'StoriesController as stories'
            })

            .state('post', {
                url: '/post/:id',
                template: 'views/post.html',
                controller: 'StoriesController as stories'
            })


        $urlRouterProvider.otherwise('/')

    })