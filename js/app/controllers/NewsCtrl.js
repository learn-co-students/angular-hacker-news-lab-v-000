function NewsCtrl(newsList) {
  // $scope.text = 'Hello, testing';
  // this.stories = newsList.data;

 var noStoriesPerPage = 30;
 var currPage = 1;

 currPage += 2;
 this.startStoryNo = currPage*noStoriesPerPage - noStoriesPerPage + 1;
 console.log(this.startStoryNo);
 this.stories = newsList.data.slice(this.startStoryNo - 1, this.startStoryNo + noStoriesPerPage - 1);
 // console.log(this.stories);

}

angular
	.module('app')
	.controller('NewsCtrl', NewsCtrl);
