var Comment = {  
  template: [
    '<p class="post" ng-bind-html="ctrl.text"></p>',
    '<h6>by {{ ctrl.by }} </h6>',
    '<ul>',
      '<li ng-repeat="subcomment in ctrl.subcomments">',
        '<comment ',
          'by="subcomment.by"',
          'id="subcomment.id"',
          'text="subcomment.text"',
          'kids="subcomment.kids"',
        '></comment>',
      '</li>',
    '</ul>'
  ].join(''),
  controller: function (PostService) {
    var ctrl = this;
    ctrl.subcomments = [];

    angular.forEach(ctrl.kids, function (value) {
      PostService
        .getPost(value)
        .then(function (resp) {
          ctrl.subcomments.push(resp.data);
        });
    });
  },
  controllerAs: 'ctrl',
  bindings: {
    by: '=',
    id: '=',
    text: '=',
    kids: '='
  }
};

angular
  .module('app')
  .component('comment', Comment)