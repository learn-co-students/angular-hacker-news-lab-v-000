function StoryController(story,StoryService) {
  //var ctrl = this;

  this.topStoriesContent = story;
  console.log(this.topStoriesContent);

  //this.topStoriesContent = story.data;

  this.test= "This is a test."




/*
  StoryService
     .getTopStoryIds()
     .then(function(results) {
       console.log(results.data);
       ctrl.topStoriesId = results.data;
       angular.forEach(ctrl.topStoriesId, function(value) {
         StoryService
           .getStoryJSONById(value)
           .then(function(results) {
             ctrl.topStoriesContent.push(results.data);
           });
       });
     });
*/
}

angular
  .module('app')
  .controller('StoryController', StoryController);
