function NewsController(NewsService) {
  debugger

  this.data = news.data;
}

angular
  .module('app')
  .controller('NewsController', NewsController);