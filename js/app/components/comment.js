var Comment = {
  bindings: {
    id: '='
  },
  templateUrl: 'views/comment.html',
  controller: function(PostService){
    var ctrl = this;
    PostService.getPost(this.id).then(function (resp){
        ctrl.data = resp.data;
        ctrl.timeDifference = Math.round( ((Date.now()/1000.0) - ctrl.data.time)*1000 );
    });
  },
  controllerAs: 'comment'
}

angular
  .module('app')
  .component('comment', Comment);
