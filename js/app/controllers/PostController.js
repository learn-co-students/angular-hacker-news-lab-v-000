function PostController(top_stories){
  this.top_stories = top_stories.data;
  this.start = 0;

  this.top_stories_slice = this.top_stories.slice(this.start, this.start + 30);
}

angular
    .module('app')
    .controller('PostController', PostController);
