function StoriesController() {
  this.stories = stories.data;
}

angular
  .module('app')
  .controller('StoriesController', StoriesController)
