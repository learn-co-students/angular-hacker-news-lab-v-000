var Story = {
  restrict: 'E',
  templateUrl: 'views/story.html',
  bindings: {
    id: '='
  },
  controllerAs: 'story',
  controller: function(StoryService) {
    var ctrl = this;

    StoryService.getStory(this.id).then(function(res) {
      ctrl.data = res.data;
    });
  }
}

angular
  .module('app')
  .component('story', Story);
