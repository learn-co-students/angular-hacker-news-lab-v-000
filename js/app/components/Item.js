var Item = {
  templateUrl: 'views/item.html',
  bindings: {
    id: '='
  },
  controller: function (StoriesService) {
    var ctrl = this;

    StoriesService
      .getStory(this.id)
      .then(function(res){
        ctrl.data = res.data;
      })
  },
  controllerAs: 'item'
};

angular
  .module('app')
  .component('Item', Item);