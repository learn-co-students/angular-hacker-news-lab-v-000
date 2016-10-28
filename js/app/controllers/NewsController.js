function NewsController(news) {
  var vm     = this;
  vm.posts   = news;
  
  vm.call    = function() {
    debugger
    alert("Bang!");
  }
}

angular
  .module('app')
  .controller('NewsController', NewsController);