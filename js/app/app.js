angular
    .module('app', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('top', {
                url: '/top',
                templateUrl: 'views/settings.html',
                controller: 'SettingsController'
            })
            .state('post', {
                url: '/post/:id',
                templateUrl: 'views/settings.html',
                controller: 'SettingsController'
            })

    });
