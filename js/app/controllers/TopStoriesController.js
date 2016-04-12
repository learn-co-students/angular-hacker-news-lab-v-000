function TopStoriesController(StoryService, PostService) {
  var ctrl = this;

  ctrl.topStoriesId = [];
  ctrl.topStories = [];

  ctrl.storyData;

  StoryService
    .getTopStoriesId('')
    .then(function (res){
      ctrl.topStoriesId = res.data;
   

      for(var i=0; i < ctrl.topStoriesId.length; i++){

        StoryService
          .getItems(ctrl.topStoriesId[i])
          .then(function(res){
            ctrl.topStories.push(res.data);
          })
        }
   });

}



angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);