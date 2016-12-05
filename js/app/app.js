angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config(function($stateProvider) {
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'js/app/templates/views/stories.html',
        controller: 'MainController'
       })
      .state('post', {
        url: '/post/:id',
        templateUrl: 'js/app/templates/views/story.html',
        controller: 'IndividualStoryController as story',
        resolve: {
          story: function (IndividualStoryService, $stateParams) {
            return IndividualStoryService.getIndividualStory($stateParams.id);
          }
        }
      })
    });
