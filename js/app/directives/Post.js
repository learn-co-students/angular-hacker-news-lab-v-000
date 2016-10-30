var Post = {
  bindings: {
    id:  '=',
  },
  templateUrl: 'views/item.html',
  controller: function(NewsService) {
    NewsService.getPostDetails(this.id)
      .then(res => this.data = res);
  },
  controllerAs: 'item'
}

angular
  .module('app')
  .component('post', Post);
  // string version is lowercase, that way the tag is reflected like <comment>