function NewsCtrl(newsList) {
  // $scope.text = 'Hello, testing';
  // this.stories = newsList.data;

 var noStoriesPerPage = 30;

 this.stories = newsList.data.slice(0, noStoriesPerPage);
 console.log(this.stories);

}

angular
	.module('app')
	.controller('NewsCtrl', NewsCtrl);
