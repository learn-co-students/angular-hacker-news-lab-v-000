function TopStoriesController(PostService, PostsService) {
  var ctrl = this;

  ctrl.allPosts = [];

  PostsService
    .getAllPosts()
    .then(function(res) {
      res.data.forEach(function(post) {
        PostService
          .getSinglePost(post)
          .then(function(res) {
            ctrl.allPosts.push(res.data);
            ctrl.posts = ctrl.allPosts.slice(0, 31);
          })
      });

    });

  ctrl.displayPosts = function() {
    ctrl.maxIndex = (30 * ctrl.pageCount)
    ctrl.minIndex = ctrl.maxIndex - 30
    ctrl.posts = ctrl.allPosts.slice(ctrl.minIndex, ctrl.maxIndex)
  };

  ctrl.pageCount = 1;
  ctrl.displayPosts();

  ctrl.nextPage = function() {
    ctrl.pageCount += 1;
    ctrl.displayPosts();
  };

  ctrl.previousPage = function() {
    ctrl.pageCount -=1;
    ctrl.displayPosts();
  };
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);