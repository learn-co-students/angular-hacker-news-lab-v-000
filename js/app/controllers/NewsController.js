function NewsController(news) {
  this.posts = news;

  this.call = function() {
    alert("Bang!");
  }
}

angular
  .module('app')
  .controller('NewsController', NewsController);