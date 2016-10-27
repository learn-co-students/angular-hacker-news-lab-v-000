function NewsController(data) {
  debugger
  this.data = data;
}

angular
  .module('app')
  .controller('NewsController', NewsController);