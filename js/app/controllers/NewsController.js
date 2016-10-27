function NewsController(news) {
  debugger
  this.data = news.data;
}

angular
  .module('app')
  .controller('NewsController', NewsController);