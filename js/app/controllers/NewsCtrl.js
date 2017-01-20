function NewsCtrl($scope) {//newsList) {
  $scope.text = 'Hello, testing';
  // console.log(this);
  // this.stories = newsList.data;



  // NewsService
  //   .getNews(13439828)
  //   .then( function (news) {
  //     console.log(news.data);
  //   });
}

angular
	.module('app')
	.controller('NewsCtrl', NewsCtrl);



  // function NewsCtrl($scope, NewsService) {
  //   $scope.text = 'Hello, testing';
  //
  //   var ctrl = this;
  //
  //   ctrl.stories = [];
  //
  //   NewsService
  //     .getNewsId()
  //     .then(function (res) {
  //       ctrl.stories = res.data;
  //       console.log(ctrl.stories);
  //     });
  //
  //   NewsService
  //     .getNews(13439828)
  //     .then( function (news) {
  //       console.log(news.data);
  //     });
  // }
