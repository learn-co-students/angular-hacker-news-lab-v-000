var Comment = {
  templateUrl: 'views/comment.html',
  controllerAs: 'comment',
  bindings: {
    id: '='
  },
  controller: function(TopStoryService){
    var ctrl = this;

    TopStoryService
      .getPost(this.id)
      .then(function (res){
        ctrl.data = res.data;
      });
  }
};

angular
  .module('app')
  .component('comment', Comment);