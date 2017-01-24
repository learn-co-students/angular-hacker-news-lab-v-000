function NewsCtrl($scope, newsList) {
  // $scope.text = 'Hello, testing';
  // this.stories = newsList.data;
  var ctrl = this;
  var nbStoryPerPage = 30;
  var currPage = 1;

  // this.startStoryNo = currPage*nbStoryPerPage - nbStoryPerPage + 1;
  // console.log(this.startStoryNo);
  // this.stories = newsList.data.slice(this.startStoryNo - 1, this.startStoryNo + nbStoryPerPage - 1);

  ctrl.displayPage = function() {
    ctrl.startStoryNo = currPage*nbStoryPerPage - nbStoryPerPage + 1;
    console.log(ctrl.startStoryNo);
    ctrl.stories = newsList.data.slice(ctrl.startStoryNo - 1, ctrl.startStoryNo + nbStoryPerPage - 1);
  };
  $scope.next = function() {
    currPage++;
    console.log(currPage);
    ctrl.displayPage();
  };
  $scope.previous = function() {
    currPage--;
    ctrl.displayPage();
  };

  ctrl.displayPage();
}

angular
	.module('app')
	.controller('NewsCtrl', NewsCtrl);
