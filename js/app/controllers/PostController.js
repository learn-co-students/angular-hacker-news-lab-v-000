function PostController(top_stories){
  this.top_stories = top_stories.data;
  this.fairview = 45;
}

angular
    .module('app')
    .controller('PostController', PostController);
