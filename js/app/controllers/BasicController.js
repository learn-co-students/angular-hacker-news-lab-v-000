function BasicController ($scope, BasicService) {
  $scope.stories = $scope.stories || [];
  // $scope.pick = function(page) {

  // }
  // BasicService.topList()
  //   .then(function(res) {
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