var Item = {
  templateUrl: 'views/item.html',
  controllerAs: 'item',
  bindings: {
    id: '='
  },
  controller: function(PostsService) {
    var ctrl = this;

    PostsService
      .getPost(ctrl.id)
      .then(function(response){
        ctrl.data = response.data;
      })
  },
}

angular
  .module('app')
  .component('item', Item);
