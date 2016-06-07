function TopStory () {
  return {
    scope: {},
    template: [
    ].join(''),
    controller: function () {

    },
    controllerAs: 'ctrl',
    bindToController: {
      url: '=',
      comments: '=',
      score: '='
    },
    restrict: 'E'
  };  
}

angular
  .module('app')
  .directive('topStory', TopStory)