var Item = {
  templateUrl: 'views/item.html',
  bindings: {
    id: '='
  },
  controller: function(PostService){
    var ctrl = this;
    PostService.getPost(this.id)
      .then(function(response){
        ctrl.data = response;
      });
  },
  controllerAs: 'item'
}

angular
    .module('app')
    .component('item', Item);
