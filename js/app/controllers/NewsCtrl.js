function NewsCtrl($scope, NewsService) {
  $scope.text = 'Hello, testing';

  NewsService
    .getNewsId()
    .then(function (res) {
      console.log(res.data)
    });

  // NewsService
  //   .getNews(13430222, function (news) {
  //     console.log(news);
  //   })
}

angular
	.module('app')
	.controller('NewsCtrl', NewsCtrl);
