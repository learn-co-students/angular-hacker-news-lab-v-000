angular
    .module('app', ['ngSanitize', 'ui.router'])
    .config(function ($stateProvider) {

      $stateProvider
        .state('top', {
          url: '/top',
          templateUrl: 'views/top.html',
          controller: 'NewsCtrl as news',
          resolve: {
            //   userData: function ($stateParams, UserService) {
            //       console.log($stateParams.id);
            //       return UserService.getUser($stateParams.id);
            //   }
          }
        });

  });
