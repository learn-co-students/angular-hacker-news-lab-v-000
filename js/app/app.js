angular
    .module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('top', {
                url: '/top',
                template: '<h1>Hello World!</h1>'
            })
            .state('post', {
                url: '/post/:id',
                template: '<h1>Post :id contente here <h1>'
            })
    });
