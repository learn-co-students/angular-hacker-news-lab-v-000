function PostCtrl(postData) {
  // $scope.text = 'Hello, testing';
  this.data = postData.data;
  console.log(this.data.kids); //[ 13485823, 13484940, 13484805, 13485789, 13485172, 13484788, 13485938, 13484766, 13485815, 13484927, 12 more… ]
}

angular
	.module('app')
	.controller('PostCtrl', PostCtrl);
