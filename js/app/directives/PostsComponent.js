var PostsComponent = {
  templateUrl: 'js/app/views/PostsComponent.html',
  controller: "PostsController as ctrl"
}

angular
  .module('app')
  .component('postsComponent', PostsComponent);