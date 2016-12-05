var UserComment = {
  bindings: {
    id: '='
  },
  templateUrl: 'js/app/templates/views/usercomment.html',
  controller: CommentController,
  controllerAs: 'usercomment'

}

angular
  .module('app')
  .component('usercomment', UserComment);
