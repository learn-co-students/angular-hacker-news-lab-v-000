var PostComponent = {
  templateUrl: 'js/app/views/PostComponent.html',
  controllerAs: "ctrl",
  bindings: {
    post: '='
  }
}

angular
  .module('app')
  .component('postComponent', PostComponent);