var Comment = {
  templateUrl: 'views/comment.html',
  bindings: {
    id: '='
  },
  controller: function (StoriesService) {
    var vm = this;

    StoriesService
      .getStoryByID(this.id)
      .then(function(res) {
        vm.data = res.data;
      })
  },
  controllerAs: 'comment'
}

angular
  .module('app')
  .component('comment', Comment);
