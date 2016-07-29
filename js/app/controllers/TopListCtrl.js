function TopListCtrl($scope, $http, GetPostsService) {
  $http.get('https://hacker-news.firebaseio.com/v0/topstories.json').success(function(data) {
    $scope.posts = [];
    for (var i = 0; i < data.length; i++) {
      this.post = GetPostsService.postInfo(data[i]);
      GetPostsService
        .postInfo(data[i])
        .then(function (res) {
          $scope.posts.push(res.data);
        });
    }
  });
}

angular
	.module('app')
	.controller('TopListCtrl', TopListCtrl);
