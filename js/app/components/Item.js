var Item = {
  bindings: {
    id: '='
  },
  templateUrl: 'js/app/views/item.html',
  controller: function(NewsService){
    var ctrl = this;

    NewsService
      .getArticle(ctrl.id)
      .then(function(res){
        ctrl.data = res.data;
      })
  },
  controllerAs: 'item'
}

angular
  .module('app')
  .component('item', Item);
