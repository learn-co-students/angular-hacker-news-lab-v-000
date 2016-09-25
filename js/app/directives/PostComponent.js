var PostComponent = {
  templateUrl: 'js/app/views/PostComponent.html',
  controller: "PostController as ctrl"
}

angular
  .module('app')
  .component('postComponent', PostComponent);