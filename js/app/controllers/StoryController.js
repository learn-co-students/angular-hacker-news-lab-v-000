function StoryController(top) {
  var ctrl = this;
 
  ctrl.top = top.data;
}

angular
  .module('app')
  .controller('StoryController', StoryController);