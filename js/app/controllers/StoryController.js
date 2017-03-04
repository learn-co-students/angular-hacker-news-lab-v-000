function StoryController($stateParams, StoriesService) {
  var top = this;

  top.id = $stateParams.id;
  top.data;

  StoriesService
    .getStoryByID(top.id)
    .then(function(res) {
      top.data = res.data;
    })
}

angular
  .module('app')
  .controller('StoryController', StoryController);
