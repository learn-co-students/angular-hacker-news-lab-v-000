function TopController(topStories) {
	this.data = topStories.data;
  // Instead of injecting $scope into every controller,
  // we can simply just use the this keyword and assign items to that instead.
}

angular
	.module('app')
	.controller('topController', TopController);
