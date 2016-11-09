function TopStoriesController(posts){
  var top = this;
  top.posts = posts.data;
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController)