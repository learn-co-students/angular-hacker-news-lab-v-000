var Item = {
  bindings: {
    id: "="
  },
  templateUrl: 'views/item.html',
  controller: function (PostsService) {
    var ctrl = this
    PostsService
      .getPost(ctrl.id)
      .then(function (res) {
        ctrl.data = res.data
      })
  }, 
  controllerAs: 'item'
}

angular
  .module("app")
  .component('item', Item)
