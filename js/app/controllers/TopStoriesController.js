function TopStoriesController (topStories, PostService) {
  var ctrl = this;

  ctrl.topStoryIds = topStories.data;

  ctrl.fullTopStories = []; // will have a default value of the first 30 stories

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
    ctrl.getFullStories(stories); // redefine fullTopStories array for the view
  };

  ctrl.prevSlice = function () {
    counter -= 30;
    var stories = ctrl.topStoryIds.slice(counter, counter + 30);
    ctrl.getFullStories(stories); // redefine fullTopStories array for the view
  };

  var defaultStories = ctrl.topStoryIds.slice(0, 30);
  ctrl.getFullStories(defaultStories); // make sure fullTopStories has an initial value with stories

}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController)
