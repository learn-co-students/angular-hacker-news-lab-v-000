function BasicController ($scope) {
  $scope.name = "fred";
}

angular
  .module('app')
  .controller('BasicController', BasicController);