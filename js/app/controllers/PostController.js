function PostController($scope, post, StoriesService, $q) {
	$scope.post = post
	$scope.kid_ids = post.kids
	$scope.listOfKids = []

	$scope.makeKids = function(kids) {
		var products = [];
		var promises = [];
		for (var i = 0; i < kids.length; i++) {
				promises.push(StoriesService.getPost(kids[i]))

		}
		$q.all(promises).then(function(response){
			for (var j = 0; j < response.length; j++) {
				products.push(response[j].data);
			}
			$scope.listOfKids.push(products)

			console.log(products)
			for (var k = 0; k < products.length; k++) {
				if (products[k].kids) {
					$scope.makeKids(products[k].kids)
				}
			}
		})
	}

	$scope.makeKids(post.kids);
	console.log($scope.listOfKids)
}

angular 
	.module('app')
	.controller('PostController', PostController)