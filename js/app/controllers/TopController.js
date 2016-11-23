function TopController() {
  var vm = this;
  vm.name = "Olli";
}

angular
  .module('app')
  .controller('TopController', TopController);
