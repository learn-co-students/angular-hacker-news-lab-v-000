function Article(PostService){
  return {
    restrict: 'EA',
    replace: true,
    transclude: true,
    templateUrl: 'views/post.html',
    scope: {},
    controller: 'PostController',
    link: function(scope, element, attrs, ctrl, transclude){
      var ctrl = this;
      PostService.getPost(attrs.id)
        .then(function(response){
          element.text(response.data.title);
          ctrl.text = response.data.title;
        });
    }
  };
}

angular
    .module('app')
    .directive('article', Article);
