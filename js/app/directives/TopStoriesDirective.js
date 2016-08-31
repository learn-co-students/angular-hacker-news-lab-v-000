function TopStoriesDirective(){
  return {
    restrict: 'E',
    templateUrl: 'views/story.html',
    controller: function(StoryService){
      var ctrl = this;
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
    // link: function(scope, elem, attrs){
    //   console.log(scope.item);
    // }
    // the item (our story ID) is inherited from its parent scope!
  }
}

angular
  .module('app')
  .directive('topStoriesDirective', TopStoriesDirective)
