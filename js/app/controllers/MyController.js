function MyCtrl($scope) {
  $scope.text = "Hello";
}

angular
	.module('app')
	.controller('MyCtrl', MyCtrl);
