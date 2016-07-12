function MainController(topStories, DataService) {

  ctrl = this;
  ctrl.start = 0
  ctrl.end = 30

  ctrl.topStoriesIdArray = topStories.data;
  ctrl.slicedArray = ctrl.topStoriesIdArray.slice(ctrl.start, ctrl.end)
  ctrl.topStoriesFullArray = []



  ctrl.nextPage = function(){
    ctrl.start += 30;
    ctrl.end += 30;
    ctrl.slicedArray = ctrl.topStoriesIdArray.slice(ctrl.start, ctrl.end)
    ctrl.presentStories();
  }

  ctrl.prevPage = function(){
    ctrl.start -= 30;
    ctrl.end -= 30;
    ctrl.slicedArray = ctrl.topStoriesIdArray.slice(ctrl.start, ctrl.end)
    ctrl.presentStories();
  }

  ctrl.presentStories = function(){
    ctrl.topStoriesFullArray = [];
    ctrl.slicedArray.forEach(function(id){
      DataService.getStoryInfo(id)
      .then(function(result){
        ctrl.topStoriesFullArray.push(result.data);
      })
    })
  }

  ctrl.presentStories();

};

angular
  .module('app')
  .controller('MainController', MainController);
