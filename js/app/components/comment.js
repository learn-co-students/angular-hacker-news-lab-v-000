var Comment = {
  templateUrl: 'views/topstory/comments.html',
  bindings: {
    id: '='
  },
  controller: function (StoryService){
    var ctrl = this;

    PostService
      .getPostInfo(this.id)
      .then(function (res){
        ctrl.data = res.data;
      })
  },
  controllerAs: 'comment'
};

angular
  .module('app')
  .component('comment', Comment);