function TopStory () {
  return {
    scope: {},
    template: [
      '<div class="story">',
        '<a href="{{ ctrl.url }}">{{ ctrl.title }}</a>',
        '<p>Score: {{ ctrl.score }}</p>',
        '<p>Comments: {{ ctrl.comments }}</p>',
      '</div>'
    ].join(''),
    controller: function () {

    },
    controllerAs: 'ctrl',
    bindToController: {
      url: '=',
      title: '=',
      score: '=',
      comments: '='
    },
    restrict: 'E'
  };  
}

angular
  .module('app')
  .directive('topStory', TopStory)