function PostsController(post) {
 this.data = post.data;
}

angular
  .module('app')
  .controller('PostsController', PostsController);