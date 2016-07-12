function TopStory () {
  return {
    template: [
      '<div>',
        '<h4 class="item__title">',
          '<a ui-sref="post({id: {{story.id}} })">',
            '{{ story.title }}',
          '</a>',
        '</h4>',
        '<div class="item__description">',
        '<a href="{{ story.url }}" target="_blank">{{ story.url }}</a>',
        '<p>Score: {{ story.score }} | Comments: {{ story.descendants }}</p>',
        '</div>',
      '</div>'
    ].join(''),
    controller: function() {},
    controllerAs: 'ctrl',
    bindToController: { story: '=' }
  };
};

angular
  .module('app')
  .directive('topStory', TopStory)
