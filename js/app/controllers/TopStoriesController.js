function TopStoriesController(topStories) {
  var ctrl = this;
  var PAGE_LENGTH = 30;

  ctrl.page = 0;
  ctrl.totalPosts = topStories.data.length;
  ctrl.totalPages = Math.ceil(ctrl.totalPosts / PAGE_LENGTH);

  ctrl.paginate = function () {
    ctrl.posts = topStories.data.slice(ctrl.page * PAGE_LENGTH, (ctrl.page + 1) * PAGE_LENGTH);
  }

  ctrl.nextPage = function () {
    ctrl.page += 1;
    ctrl.paginate();
  }

  ctrl.lastPage = function () {
    ctrl.page -= 1;
    ctrl.paginate();
  }

  ctrl.paginate();
  console.log(ctrl.posts);
}

angular
    .module('app')
    .controller('TopStoriesController', TopStoriesController)
