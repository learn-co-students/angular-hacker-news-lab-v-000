function StoryController(item){
  this.hello = "bonjour";
  this.data = item.data;
}

angular
  .module('app')
  .controller('StoryController', StoryController)
