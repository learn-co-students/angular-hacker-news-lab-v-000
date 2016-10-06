app.controller('StoriesController', [
           '$scope', 'topStories',
  function ($scope ,  topStories) {
    topStories.success(function(data) {
      $scope.topStories = data;
    });
}]);
