var Comment = {
  bindings: {
    id: '='
  },
  template: [
    '<div>',
      '<h4>By: {{ comment.data.by }}</h4>',
      '<p>{{ comment.data.text }}</p>',
      '<ul>',
        '<li ng-repeat="comment in comment.data.kids">',
          '<comment id="comment" />',
        '</li>',
      '</ul>',
    '</div>'
  ].join(''),
  controller: function(PostService) {
    var ctrl = this;

    PostService
      .getSinglePost(ctrl.id)
      .then(function(res) {
        ctrl.data = res.data;
        console.log(res.data);
      })
  },
  controllerAs: 'comment'
};

angular
  .module('app')
  .component('comment', Comment);