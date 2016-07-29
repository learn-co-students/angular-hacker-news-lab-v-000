function TopListCtrl($scope, $http, GetPostsService) {
  $http.get('https://hacker-news.firebaseio.com/v0/topstories.json').success(function(data) {
    $scope.posts = [];
    var counter = 1;
    for (var i = 0; i < data.length; i++) {
      this.post = GetPostsService.postInfo(data[i]);
      GetPostsService
        .postInfo(data[i])
        .then(function (res) {
          res.data.listId = counter;
          $scope.posts.push(res.data);
          counter += 1;
        });
    }

    // pagination
    $scope.curPage = 0;
    $scope.pageSize = 30;

   $scope.numberOfPages = function() {
     return Math.ceil($scope.posts.length / $scope.pageSize);
    };
  });

}

angular
	.module('app')
	.controller('TopListCtrl', TopListCtrl);
