function PostController(post, DateService) {
  this.post = post;

  function activate(){
    post.time = DateService.unixTimeConverter(post.time);
  }

  activate();
}

angular
  .module('app')
  .controller('PostController', PostController);