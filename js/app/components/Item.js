hackerNewsApp.component('item', {
  templateUrl: 'views/item.html',
  bindings: {
    id: "="
  },
  controller: function(StoriesService){
    var ctrl = this;
    StoriesService
      .getDetails(this.id)
      .then(function(res){
        ctrl.data = res.data;
      })
  },
  controllerAs: 'item'
});