var Comment = {

  templateUrl: 'views/comment.html',
  bindings: {
    id: '='
  },

  controller: function (PostsService) {
    var postId = this.id;
    var comment = this;

    this.post = PostsService.getPost(postId);
    PostsService
      .getPost(postId)
      .then(function (res) {
        comment.data = res.data;
      });
  },
  controllerAs: 'comment'
};

angular
  .module('app')
  .component('Comment', Comment);
