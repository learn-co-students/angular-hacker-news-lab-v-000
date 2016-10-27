function NewsController(news) {
  debugger
  this.posts = news;
}

angular
  .module('app')
  .controller('NewsController', NewsController);