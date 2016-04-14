var Thread = {
  restrict: 'E',
  bindings: {
    id: '='
  }, 
  templateUrl: 'views/thread.html',
  controller: function (HackerNewsService) {
    var ctrl = this;
    HackerNewsService
      .getPost(this.id)
      .then( function (response) {
        ctrl.data = response.data
      });
  }, 
  controllerAs: 'thread'
}

angular
  .module('app')
  .component('thread', Thread)