angular
    .module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('top', {
                url: '/top',
                template: '<h1>Hello World!</h1>'
            })
    });
