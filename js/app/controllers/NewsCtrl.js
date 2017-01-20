function NewsCtrl($scope, NewsService) {
  $scope.text = 'Hello, testing';

  NewsService
    .getNewsId()
    .then(function (res) {
      // console.log(res.data)
    });

  NewsService
    .getNews(13439828)
    .then( function (news) {
      console.log(news.data);
    });
}

angular
	.module('app')
	.controller('NewsCtrl', NewsCtrl);
