angular
.module('app', ['ui.router', 'ngSanitize'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('top', {
    url: '/top',
    templateUrl: 'views/topstory.html',
    controller: 'TopStoriesController as ctrl',
    resolve: {
      topstories: function(TopStoriesService) {
        return TopStoriesService.getStories()
        .then(function(topstories) {
          this.stories = [];
          angular.forEach(topstories.data, function(value, key) {
            TopStoriesService.getDetail(value).then(function(story){
              this.stories.push(story.data);
            });
          });
          return this.stories
        });
      }
    }
  })
  .state('post', {
    url: '/post/:id',
    templateUrl: 'views/post.html',
    controller: 'PostController as pctrl',
    resolve: {
      post: function(TopStoriesService, $stateParams) {
        return TopStoriesService.getDetail($stateParams.id).then(function(detail){
          return detail.data;
        });
      }
    }
  });
  $urlRouterProvider.otherwise('/top');
});
