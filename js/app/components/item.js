var Item = {
  templateUrl: 'views/item.html',
  bindings: {
    id: '='
  },
  controller: function(TopStoriesService) {
    var ctrl = this;

    TopStoriesService
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
