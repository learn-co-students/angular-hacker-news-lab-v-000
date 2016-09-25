function TestController(test) {
  this.test = test;

}

angular
  .module('app')
  .controller('TestController', TestController);