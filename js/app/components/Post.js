var Post = {
  restrict: 'E',
  bindings: {
    id: '='
  }, 
  template: [
    '<div>',
      '<li>{{ post.data.url }}</li>',
    '</div>'
  ].join(''),
  controller: function (HackerNewsService) {
    var ctrl = this;
    HackerNewsService
      .getPost(this.id)
      .then( function (response) {
        ctrl.data = response.data
      });
  }, 
  controllerAs: 'post'
}

angular
  .module('app')
  .component('post', Post)