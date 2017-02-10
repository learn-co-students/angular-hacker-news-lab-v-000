function PostsController(story){
  this.data = story.data;
}

angular
  .module('app')
  .controller('PostsController', PostsController)
