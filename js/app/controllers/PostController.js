function PostController(post, PostsService) {
  ctrl = this;

  this.data = post.data;
  this.kids = post.data.kids;

  this.comments = [];

  ctrl.kids.forEach(function(id) {
    PostsService.getComment(id).then(function(res) {
      ctrl.comments.push(res.data);
    });
  });
}

angular
  .module('app')
  .controller('PostController', PostController);