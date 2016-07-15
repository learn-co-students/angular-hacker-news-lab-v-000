var Item = {
  templateUrl: "views/item.html",
  bindings: {
              id: '='
  },
  controller: function(ApiService){
    var ctrl = this;
    ApiService
          .getPost(this.id)
          .then(function(result){
            ctrl.data = result.data
          })
  },
  controllerAs: "item"
}

angular
      .module("app")
      .component("item", Item);
