function StoryController(post) {
   this.data = post.data;
  //debugger;
}

angular
  .module('app')
  .controller('StoryController', StoryController);