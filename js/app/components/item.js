var Item = {
  bindings: {
    id: '='
  },
  templateUrl: 'js/app/views/item.html',
  controller: function(PostService) {
    var ctrl = this;
    debugger;
    PostService
      .getPost(ctrl.id)
      .then(function(response) {
        ctrl.data = response.data;
      })
  },
  controllerAs: 'item'
}

angular
  .module('app')
  .component('item', Item);