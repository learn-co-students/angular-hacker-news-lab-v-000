function DisplayNewsController(TopStoriesController, TopNewsService) {
  var dc = this;
  //dc.post = post.data;
  console.log(TopStoriesController.topStories);
}

angular
  .module('app')
  .controller('DisplayNewsController', DisplayNewsController);
