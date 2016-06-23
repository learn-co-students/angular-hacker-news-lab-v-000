function Story() {
  return {
    templateUrl: 'js/app/views/story.html',
    scope: {},
    restrict: 'E',
    controller: function(HackerNewsService) {
      var story = this;
      HackerNewsService.getStory(story.id)
      .then(function(response) {
        story.data = response.data
      });
    },
    controllerAs: 'story',
    bindToController: {
      id: '='
    }
  };
}

angular
    .module('app')
    .directive('story', Story);