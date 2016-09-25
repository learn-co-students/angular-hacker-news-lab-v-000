var PostComponent = {
  templateUrl: 'js/app/views/PostComponent.html',
  controller: "PostController",
  bindings: {
    test: '='
  }
}

angular
  .module('app')
  .component('postComponent', PostComponent);