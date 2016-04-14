function StoryIndexController(stories){
  var ctrl = this;
  ctrl.stories = stories.data;
  ctrl.firstIndex = 0;
  ctrl.lastIndex = 30;
  ctrl.currentStories = [];

  ctrl.setCurrentStories = function(){
    ctrl.currentStories = this.stories.slice(ctrl.firstIndex, ctrl.lastIndex);
  }

  ctrl.nextPage = function(){
    ctrl.firstIndex += 30;
    ctrl.lastIndex += 30;
    ctrl.setCurrentStories();
  }

  ctrl.prevPage = function(){
    ctrl.firstIndex -= 30;
    ctrl.lastIndex -= 30;
    ctrl.setCurrentStories();
  }

  ctrl.setCurrentStories();
}

angular
  .module('app')
  .controller('StoryIndexController', StoryIndexController);