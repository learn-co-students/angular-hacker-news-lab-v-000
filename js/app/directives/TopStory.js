function TopStory () {
  return {
    scope: {},
    template: [
      '<div>',
        '<h4 class="item__title">',
          '<a ui-sref="post({id: {{ctrl.id}} })">',
            '{{ ctrl.title }}',
          '</a>',
        '</h4>',
        '<a class="item__description" href="{{ ctrl.url }}">{{ ctrl.url }}</a>',
        '<p class="item__description">Score: {{ ctrl.score }}</p>',
        '<p class="item__description">Comments: {{ ctrl.comments }}</p>',
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
