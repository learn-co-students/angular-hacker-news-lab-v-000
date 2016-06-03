angular
    .module('app', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('home', {
                url: '/',
                templateURL: 'index.html',
                controller: 'StoriesController as stories'
            })


        $urlRouterProvider.otherwise('/')

    })