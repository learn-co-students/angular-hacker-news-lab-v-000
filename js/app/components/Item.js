var Item = {
  templateUrl: 'views/item.html',
  bindings: {

  }
  controller: function (PostsServices) {
    var ctrl = this;

    PostsService
      .getPost(this.id)
      .then(function(res) {
        ctrl.data = res.data;
      })
  },
  controllerAs: 'item'
};

angular
  .module('app')
  .component('item', Item);