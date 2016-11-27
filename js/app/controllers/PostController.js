function PostController (post) {
 this.post = post
}
angular
  .module('app')
  .controller('PostController', PostController);
