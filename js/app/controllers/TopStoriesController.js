function TopStoriesController(posts) {
  this.page = 0;
  this.postSize = posts.data.length;
  
}

angular
  .module('app')
  .controller('topStoriesController', TopStoriesController);