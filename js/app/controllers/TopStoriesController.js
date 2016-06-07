function TopStoriesController (topStoriesResponse, PostService) {
  var ctrl = this;

  ctrl.topStoryIds = topStoriesResponse.data;

  ctrl.fullTopStories = []; // should have a default value of the first 30 stories

  ctrl.getFullStories = function (stories) { // call this with a sliced array of 30 stories at a time
    ctrl.fullTopStories = []; // clear out any old values
    angular.forEach(stories, function (value) {
      PostService // call PostService, get full details for each post, push into array
        .getPost(value)
        .then(function (resp) {
          ctrl.fullTopStories.push(resp.data);
        });
    });
  };
  
  var counter = 0; // where to begin the slice
  
  ctrl.nextSlice = function () {
    counter += 30;
    var stories = ctrl.topStoryIds.slice(counter, counter + 30);
    ctrl.getFullStories(stories);
  };

  ctrl.prevSlice = function () {
    counter -= 30;
    var stories = ctrl.topStoryIds.slice(counter, counter + 30);
    ctrl.getFullStories(stories);
  };


}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController)