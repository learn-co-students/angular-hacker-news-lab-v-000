var Comments = {
  restrict: 'E',
  templateUrl: 'views/comment.html',
  controller: function (PostService) {
    var ctrl = this
    PostService.getItem(this.id).then(function (res) {
      ctrl.comment = res.data
    });
  },
  controllerAs: 'commentCtrl',
  bindings: {
    id: '='
  }
}

angular
  .module('app')
  .component('comments', Comments)
