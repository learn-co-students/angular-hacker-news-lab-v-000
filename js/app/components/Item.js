var Item = {
  templateUrl: 'views/item.html',
  bindings: {
    id: '='
  },
  controller: function(TopStoriesService) {
    var ctrl = this;

    TopStoriesService
      .getPost(ctrl.id)
      .then(function(response) {
        ctrl.data = response.data;
      });
  },
  controllerAs: 'item'
}

angular
  .module('app')
  .component('item', Item);