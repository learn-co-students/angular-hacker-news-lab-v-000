angular
  .module('app')
  .controller('PostController', function(story){
    this.article = story.data;
  });
