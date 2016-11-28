var Comment = {
  template: 'views/comment.html',
  controller: 'PostController',
  controllerAs: 'comment'
};

angular
  .module('app')
  .component('comment', Comment);