var Comment = {
  restrict: 'E',
  bindings: {
    id: '='
  }, 
  templateUrl: 'views/comment.html',
  controller: function (HackerNewsService) {
    var ctrl = this;
    HackerNewsService
      .getPost(this.id)
      .then( function (response) {
        ctrl.data = response.data
      });
  }, 
  controllerAs: 'comment'
}

angular
  .module('app')
  .component('comment', Comment)