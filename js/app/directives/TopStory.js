function TopStory () {
  return {
    scope: {},
    template: [
      '<div class="story">',
        '<h4>',
          '<a ui-sref="post({id: {{ctrl.id}} })">',
            '{{ ctrl.title }}',
          '</a>',
        '</h4>',
        '<a href="{{ ctrl.url }}">{{ ctrl.url }}</a>',
        '<p>Score: {{ ctrl.score }}</p>',
        '<p>Comments: {{ ctrl.comments }}</p>',
      '</div>'
    ].join(''),
    controller: function () {

    },
    controllerAs: 'ctrl',
    bindToController: {
      url: '=',
      id: '=',
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