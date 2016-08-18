var Comment = {
  templateUrl: 'views/comment.html',
  bindings: {
    id: '='
  },
  controller: function(PostsService) {
    var ctrl = this;

    PostsService
      .getPost(this.id)
      .then(function(res) {
        ctrl.data = res.data;
      })
  },
  controllerAs: 'comment'
};

angular
  .module('app')
  .component('comment', Comment);