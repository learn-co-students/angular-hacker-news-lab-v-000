function TopStoriesController(PostsService) {
  
  var ctrl = this;

  ctrl.start = 0;
  ctrl.end = 30;

  returnArticles = function() {
    PostsService
    .getPosts()
    .then(function(res) {
      ctrl.posts = res.data;
      ctrl.articles = [];
      ctrl.posts.forEach(function(id) {
        PostsService.getPost(id).then(function(res) {
          ctrl.articles.push(res.data);
          ctrl.stories = ctrl.articles.slice(ctrl.start, ctrl.end);
        });
      });
    });
  }

  returnArticles();

  ctrl.paginateNext = function() {
    this.start = this.start + 30;
    this.end = this.end + 30;
    this.stories = this.articles.slice(this.start, this.end)
  }

  ctrl.paginatePrevious = function() {
    this.start = this.start - 30;
    this.end = this.end - 30;
    this.stories = this.articles.slice(this.start, this.end)
  }
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);