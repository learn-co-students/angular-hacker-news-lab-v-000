function TopStoriesController(posts){
  var top = this;
  top.posts = posts.data;
  top.hello = "Hello";
  debugger;
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController)