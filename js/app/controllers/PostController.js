function PostController (post, PostService) {
  var ctrl = this;

  ctrl.story = post.data;
  ctrl.commentIds = ctrl.story.kids;
  ctrl.commentDetails = [];

  angular.forEach(ctrl.commentIds, function (value) {
    PostService
      .getPost(value)
      .then(function (resp) {
        ctrl.commentDetails.push(resp.data);
      });
  });

}

angular
  .module('app')
  .controller('PostController', PostController)