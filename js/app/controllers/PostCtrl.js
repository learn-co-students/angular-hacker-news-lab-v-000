function PostCtrl(postData) {
  // $scope.text = 'Hello, testing';
  this.data = postData.data;
  console.log(postData.data);



  // NewsService
  //   .getNews(13439828)
  //   .then( function (news) {
  //     console.log(news.data);
  //   });
}

angular
	.module('app')
	.controller('PostCtrl', PostCtrl);
