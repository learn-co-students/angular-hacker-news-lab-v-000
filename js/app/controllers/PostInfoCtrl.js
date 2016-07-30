function PostInfoCtrl($scope, $http, $stateParams, GetPostsService) {
  var postId = $stateParams.id;

    this.post = GetPostsService.postInfo(postId);
    GetPostsService
      .postInfo(postId)
      .then(function (res) {
        $scope.post = res.data;
        
      });
}

angular
	.module('app')
	.controller('PostInfoCtrl', PostInfoCtrl);
