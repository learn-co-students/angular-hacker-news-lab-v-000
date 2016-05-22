function OtherController ($scope, post) {
  $scope.single = post.data;
}

angular
  .module('app')
  .controller('OtherController', OtherController);