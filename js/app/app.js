angular
  .module('app', [
    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('', {
        url: '',
        templateUrl: '.html',
        controller: '',
        resolve: {
          something:  function ($http, $stateParams) {
                        return
                      }
        }
      })
  });
