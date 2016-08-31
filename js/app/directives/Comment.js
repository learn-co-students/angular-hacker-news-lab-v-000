function Comment(){
  return {
    restrict: 'E',
    templateUrl: 'views/item.html',
    controller: function(StoryService){
      var ctrl = this;
      // console.log(this.id);
      StoryService.getItemById(this.id)
        .then(function(response){
          ctrl.data = response.data;
        });
    },
    scope: {},
    controllerAs: 'vm',
    bindToController: {
      id: '='
    }
  }
}

angular
  .module('app')
  .directive('comment', Comment)
