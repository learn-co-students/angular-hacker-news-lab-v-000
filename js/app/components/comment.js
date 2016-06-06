var Comment = {
  bindings: {
    id: '@'
  },
  templateUrl: 'views/comment.html',
  controller: ['StoryService', '$filter', function(StoryService, $filter) {
    var ctrl = this;

    StoryService
      .getStoryById(ctrl.id)
      .then(function (res){
        ctrl.comment = res.data;
        ctrl.date = $filter('date')(ctrl.comment.time, 'medium');
      });

  }],
  controllerAs: 'ctrl'
}


angular
  .module('app')
  .component('comment', Comment)