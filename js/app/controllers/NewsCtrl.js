function NewsCtrl($scope, newsList) {

  var ctrl = this;
  var nbStoryPerPage = 30;
  $scope.currPage = 1;


  ctrl.displayPage = function() {
    ctrl.startStoryNo = $scope.currPage*nbStoryPerPage - nbStoryPerPage + 1;
    ctrl.stories = newsList.data.slice(ctrl.startStoryNo - 1, ctrl.startStoryNo + nbStoryPerPage - 1);
  };
  $scope.next = function() {
    $scope.currPage++;
    console.log($scope.currPage);
    ctrl.displayPage();
  };
  $scope.previous = function() {
    $scope.currPage--;
    ctrl.displayPage();
  };

  ctrl.displayPage();
}

angular
	.module('app')
	.controller('NewsCtrl', NewsCtrl);
