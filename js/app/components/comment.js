var Comment = {
  bindings: {
    id: '='
  },
  controllerAs: 'ctrl',
  controller: function (TopStoryService){
    var ctrl = this;

    TopStoryService
      .getPost(ctrl.id)
      .then(function(res){
        ctrl.data = res.data;
      });
  }
}

angular
  .module('app')
  .component('comment', Comment);