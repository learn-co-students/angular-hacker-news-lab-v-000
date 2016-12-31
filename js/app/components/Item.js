var Item = {
  templateUrl: 'views/item.html',
  controllerAs: 'item',
  bindings: {
    id: '='
  },
  controller: function(TopStoriesService) {
    var ctrl = this;

    TopStoriesService
      .getPost(ctrl.id)
      .then(function(response){
        ctrl.data = response.data;
      })
  },
}

angular
  .module('app')
  .component('item', Item);
