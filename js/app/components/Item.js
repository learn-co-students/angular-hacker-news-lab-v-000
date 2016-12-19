var Item = {
  templateUrl: 'views/item.html',
  bindings: {
    id: '='
  },
  controller: function (PostsService) {
    var vm = this;

    PostsService
      .getPost(vm.id)
      .then(function(postsRes){
        vm.data = postsRes.data;
      })
  },
  controllerAs: 'item'
};

angular
  .module('app')
  .component('item', Item);
