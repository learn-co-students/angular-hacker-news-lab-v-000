function TopStoriesController(posts) {
  this.posts = posts.data
  // console.log(posts);
  
  this.page = 0;
  this.postSize = posts.data.length;

}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);