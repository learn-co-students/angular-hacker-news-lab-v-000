function StoryController(post) {
  this.data = post.data;
}

angular
  .module('app')
  .controller('StoryController', StoryController);
