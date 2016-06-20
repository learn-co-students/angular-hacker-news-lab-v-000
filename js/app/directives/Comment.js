function Comment() {
  return {
    templateUrl: 'views/comment.html',
    scope: {},
    restrict: 'E',
    controller: function(HackerNewsService) {
      var comment = this;
      HackerNewsService.getStory(comment.id)
      .then(function(response) {
        comment.data = response.data;
      });
    },
    bindToController: {
      id: '='
    },
    controllerAs: 'comment'
  };
}


angular
    .module('app')
    .directive('comment', Comment);
