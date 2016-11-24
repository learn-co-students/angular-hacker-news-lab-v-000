function StoryController($scope) {
  var ctrl = this;
  ctrl.stories = '';

  StoriesService
    .allStories()
    .then(function (res) {
      console.log(res);
      ctrl.stories = res.data.slice(0, 30);
    })
}

angular
  .module('app', [])
  .controller('StoryController', StoryController);
