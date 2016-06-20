function TopStoryController (TopStoryService){
  var ctrl = this;

  ctrl.storyId = [];
  ctrl.stories = [];

  TopStoryService
    .getTopStories('')
    .then(function (res){
      ctrl.storyId = res.data;

      for(var i = 0; i < ctrl.storyId.length; i++) {
        TopStoryService
          .getPost(ctrl.storyId[i])
          .then(function(res){
            ctrl.stories.push(res.data);
          });
      }
    });
}

angular
  .module('app')
  .controller('TopStoryController', TopStoryController);