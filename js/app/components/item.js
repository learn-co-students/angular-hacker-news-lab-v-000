var Item = {
  templateUrl: 'views/item.html',
  controller: function(StoriesService){
    var ctrl = this;
    StoriesService
      .getPostInfo(this.id)
      .then(function(response){
        ctrl.data = response.data;
      });
  },
  controllerAs: 'item',
  bindings: {
    id: '='
  }
};

angular
  .module('app')
  .component('item', Item);