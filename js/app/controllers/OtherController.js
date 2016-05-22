function OtherController ($scope, post) {
  $scope.single = post.data;
  $scope.thingy = "thing";
}

angular
  .module('app')
  .controller('OtherController', OtherController);