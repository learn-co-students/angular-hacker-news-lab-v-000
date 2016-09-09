var PostItem = {
  templateUrl: 'views/postitem.html',
  controller: function (PostService) {
    var ctrl = this
     PostService.getItem(this.id)
      .then(function (res) {
        ctrl.post=res.data;
      })
  },
  controllerAs: 'postCtrl',
  restrict:'E',
  bindings:{
    id: '=',
    i:'='
  }
}

angular
  .module('app')
  .component('postItem', PostItem)
