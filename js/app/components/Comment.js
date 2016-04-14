var Comment = {
  templateUrl: 'js/app/views/comment.html',
  bindings: {
    id: '='
  },
  controllerAs: 'comment',
  controller: function(StoryService){
    var ctrl = this;
    StoryService.getStory(ctrl.id).then(function(response){ctrl.comment = response.data});
  }
}

angular
  .module('app')
  .component('comment', Comment);