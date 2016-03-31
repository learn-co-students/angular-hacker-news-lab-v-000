function Hello(){
  this.hi = "Hello World";
}

angular
  .module('app')
  .controller('Hello', Hello);