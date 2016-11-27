var Comment = {
  templateUrl: 'views/comment.html',
  bindings: {
    id: '='
  },
  controller: function(TopStoriesService) {
    var cctrl = this;

    TopStoriesService
    .getDetail(cctrl.id)
    .then(function(result){
      cctrl.data = result.data;
    })
  },
  controllerAs: 'comment'
};

angular
  .module('app')
  .component('comment', Comment)
