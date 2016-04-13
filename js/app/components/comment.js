var Comment = {
  templateUrl: 'views/topstory/comments.html',
  bindings: {
    id: '='
  },
  controller: function (StoryService){
    var ctrl = this;

    StoryService
      .getItems(this.id)
      .then(function (res){
        ctrl.data = res.data;
      })
  },
  controllerAs: 'comment'
};

angular
  .module('app')
  .component('comment', Comment);