function Article(PostService){
  return {
    restrict: 'EA',
    replace: true,
    transclude: true,
    controller: 'PostController',
    templateUrl: 'views/post.html',
    link: function(scope, element, attrs, ctrl, transclude){
      console.log(element);
    }
  };
}

angular
    .module('app')
    .directive('article', Article);
