angular
  .module('app', ['ui.router'])
  .config(function($stateProvider){
    $stateProvider
      .state('topStories', {
        url: '/top',
        component: 'topStories',
        resolve: {
          stories: function(storiesService) {
            return storiesService.getTopStories()
          }
        }
    })
  })
