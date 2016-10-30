var Comment = {
  bindings: {
    id:  '=',
  },
  templateUrl: 'views/comments.html',
  controller: function(NewsService) {
    // do something
    // debugger
    NewsService.getPostDetails(this.id)
      .then(res => this.data = res);
  },
  controllerAs: 'item'
}

angular
  .module('app')
  .component('comment', Comment);
  // string version is lowercase, that way the tag is reflected like <comment>