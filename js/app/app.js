angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config(function($stateProvider){
    $stateProvider
      .state('top', {
        url: '/top',
        component: 'topStories',
        resolve: {
          stories: function(storiesService) {
            return storiesService.getTopStories()
          }
        }
    }).state('post', {
      url: '/post/:id',
      component: 'post',
      resolve: {
        story: function($stateParams, storiesService) {
          return storiesService.getStory($stateParams.id)
        }
      }
  })
  })
