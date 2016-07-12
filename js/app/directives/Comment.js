var Comment = {
  template: [
    '<p class="post" ng-bind-html="item.id.text"></p>',
    '<p>written by {{ item.id.by }} at {{ item.id.time * 1000 | date: "short" }}  </p>',
    '<ul>',
      '<li ng-repeat="subcomment in item.replies">',
        '<comment id="subcomment"></comment>',
      '</li>',
    '</ul>'
  ].join(''),

  controller: function (DataService) {
    var ctrl = this;
    console.log("hi there");
    ctrl.replies = [];

    angular.forEach(ctrl.id.kids, function (value) {
      DataService
        .getStoryInfo(value)
        .then(function (resp) {
          ctrl.replies.push(resp.data);
        });
    });

  },
  controllerAs: 'item',
  bindings: {
    id: '='
  }
};

angular
  .module('app')
  .component('comment', Comment)
