var Item = {
  templateUrl: 'js/app/views/item.html',
  bindings: {
    id: '=',
    index: '='
  },
  controller: function (PostsService) {
      var ctrl = this;

      PostsService
          .getPost(this.id)
          .then(function (res) {
              ctrl.data = res.data;
          });
  },
  controllerAs: 'item'
}

angular
    .module('app')
    .component('item', Item)
