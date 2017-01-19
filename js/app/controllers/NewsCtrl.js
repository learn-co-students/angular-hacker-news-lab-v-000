function NewsCtrl($scope, NewsService) {
  $scope.text = 'Hello, testing';

  NewsService
    .getNewsId()
    .then(function (res) {
      console.log(res.data)
    });

  NewsService
    .getNews(13437905)
    .then(function (news) {
      console.log(news.data.title);
    })
}

angular
	.module('app')
	.controller('NewsCtrl', NewsCtrl);
