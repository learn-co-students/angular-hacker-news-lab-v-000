function ItemsController(post) {
  var ctrl = this;
  this.post = post.data
}




angular
  .module('app')
  .controller('ItemsController', ItemsController)
