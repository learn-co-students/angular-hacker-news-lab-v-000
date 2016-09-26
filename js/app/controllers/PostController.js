function PostController(postData) {
  
  this.data = []
  this.data.push(postData.data)

 }





angular 
  .module('app')
  .controller('PostController', PostController)