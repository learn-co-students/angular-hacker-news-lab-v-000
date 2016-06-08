var Item = {
  bindings: {
    post: '='
  },
  templateUrl: 'views/item.html',
  controller: function (DomainService) {
    var ctrl = this;
    DomainService.getPost(this.post).then(function(response) {
      ctrl.data = response.data;
    });
  },
  controllerAs: 'post'
};

angular
  .module('app')
  .component('item', Item)
