var CommentComponent = {
  templateUrl: 'js/app/views/CommentComponent.html',
  controller: "CommentsController as ctrl"
}

angular
  .module('app')
  .component('commentComponent', CommentComponent);