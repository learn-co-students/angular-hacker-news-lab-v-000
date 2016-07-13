var Comment = {
  template: [
      '<div class="item__author">',
      '<a ui-sref="user({id: item.data.by })">{{ item.data.by }}</a>',
      ' {{ (item.data.time * 1000) | date: "short"}}',
      '</div>',
      '<div ng-bind-html="item.data.text"></div>',
      '<ul class="comments">',
      '<li ng-repeat="comment in item.data.kids">',
      '<comment id="comment"></item>',
      '</li>',
      '</ul>',
      '</div>'
    ].join(''),

  controller: function (DataService) {
    var ctrl = this;
    DataService.getStoryInfo(ctrl.id)
    .then(function(result){
      ctrl.data = result.data;
    })
  },
  controllerAs: 'item',
  bindings: {
    id: '='
  }
};

angular
  .module('app')
  .component('comment', Comment)
