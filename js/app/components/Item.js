var Item = {
  templateUrl: 'js/app/views/item.html',
  controllerAs: 'item',
  bindings: {id: '='},
  controller: function(PostsService) {
    var ctrl = this;

    PostsService
      .getPost(this.id)
      .then(function (res) {
        ctrl.data = res.data;
      })
  },
};

angular
  .module('app')
  .component('item', Item);