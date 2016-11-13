function TopController(TopService) {
  var ctrl = this;
  results = TopService.getStories();
  ctrl.top = [];
  ctrl.top = results.data;
}

angular
  .module('app')
  .controller('TopController', TopController);