function TopController($scope, top, StoriesService, $timeout, $q){
	$scope.topStories = top.data
	$scope.listOfStories = []
	$scope.topStoriesList = []
	$scope.firstSlice = 0;
	$scope.secondSlice = 30;
	$scope.loading = true




	$scope.makeList = function() {
		var products = [];
		var promises = [];
		for (var i = 0; i < $scope.topStories.length; i++) {
				promises.push(StoriesService.getPost($scope.topStories[i]))

		}
		$q.all(promises).then(function(response){
			for (var j = 0; j < response.length; j++) {
				products.push(response[j].data);
			}
			$scope.loading = false
			$scope.listOfStories = products
			angular.extend($scope.topStoriesList, products.slice(0, 30))
			console.log($scope.topStoriesList)
		})
	}

	$scope.previous = function() {
	if ($scope.firstSlice >= 30) {
		$scope.firstSlice -= 30;
		$scope.secondSlice -= 30;
	}
		$scope.topStoriesList = $scope.listOfStories.slice($scope.firstSlice, $scope.secondSlice);
		$scope.$apply();
	}

	$scope.next = function() {
	if ($scope.secondSlice <= ($scope.listOfStories.length - 30)) {
		$scope.firstSlice += 30;
		$scope.secondSlice += 30;
	}
		$scope.topStoriesList = $scope.listOfStories.slice($scope.firstSlice, $scope.secondSlice);
		$scope.$apply();
	}

	$scope.makeList();
}

angular
	.module('app')
	.controller('TopController', TopController)
