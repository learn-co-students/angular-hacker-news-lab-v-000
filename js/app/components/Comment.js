var Comment = {

  templateUrl: 'views/comment.html',
  bindings: {
    id: '='
  },

  controller: function (GetPostsService) {
    var postId = this.id;
    var comment = this;

      this.post = GetPostsService.postInfo(postId);
      GetPostsService
        .postInfo(postId)
        .then(function (res) {
          comment.data = res.data;
        });
  },
  controllerAs: 'comment'
};

angular.module('app').component('comment', Comment);
