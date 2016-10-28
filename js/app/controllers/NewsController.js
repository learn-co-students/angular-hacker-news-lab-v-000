function NewsController(news) {
  debugger
  vm = this;
  vm.posts = news;
  
  // this.posts = news;
  // this.posts = ["blah", "b", "a"];
  this.call  = function() {
    debugger
    alert("Bang!");
  }
}

angular
  .module('app')
  .controller('NewsController', NewsController);