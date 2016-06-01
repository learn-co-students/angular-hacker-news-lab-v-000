var Item = {
  templateUrl: 'views/item.html',
  bindings: {
    id: '='
  },
  controllerAs: 'item',
  controller: function (PostsService) {
    var ctrl = this;

    PostsService
      .getPost(ctrl.id)
      .then(function(resp) {
        ctrl.data = resp.data;
        // console.log(resp.data);
      });
    }
}

angular
  .module('app')
  .component('item', Item)