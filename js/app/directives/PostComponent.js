var PostComponent = {
  templateUrl: 'js/app/views/PostComponent.html',
  controllerAs: "ctrl",
  bindings: {
    story: '='
  }
}

angular
  .module('app')
  .component('postComponent', PostComponent);