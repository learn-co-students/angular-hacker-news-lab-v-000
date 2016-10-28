function NewsController(news) {
  debugger
  this.posts = [];
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