var Item = {
  templateUrl: 'views/item.html',
  bindings: {
    id: '='
  },
  controller: function (TopService) {
    var ctrl = this;

    TopService
      .getPost(this.id)
      .then(function (res) {
        ctrl.data = res.data;
      })
  },
  controllerAs: 'item'
};

angular
  .module('app')
  .component('item', Item);