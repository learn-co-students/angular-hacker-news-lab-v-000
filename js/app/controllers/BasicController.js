function BasicController ($scope, BasicService) {
  // $scope.name = "fred";
  // $scope.stories = $scope.stories || [];

  // BasicService.topList()
  //   .then(function(res) {
  //     $scope.number = res.data[0];
  //     var arr = res.data.slice(0, 30);
  //     arr.forEach(function(item) {
  //       BasicService.story(item)
  //       .then(function(res) {
  //         $scope.stories.push(res.data);
  //       });
  //     });
  //   });
}

angular
  .module('app')
  .controller('BasicController', BasicController);