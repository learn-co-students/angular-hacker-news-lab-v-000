var Item = {
  bindings: {
    id: '='
  },
  templateUrl: 'js/app/views/item.html',
  controller: function(PostsService) {
    var ctrl = this;

    PostsService
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