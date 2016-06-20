function Story() {
  return {
    templateUrl: 'views/story.html',
    scope: {},
    restrict: 'E',
    controller: function(HackerNewsService) {
      var story = this;

      HackerNewsService.getStory(story.id)
      .then(function(response) {
        story.data = response.data
      });
    },
    bindToController: {
      id: '='
    },
    controllerAs: 'story'
  };
}

angular
    .module('app')
    .directive('story', Story);
