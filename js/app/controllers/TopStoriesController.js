function TopStoriesController(topStories) {
  var ctrl = this;
  var postIds = topStories.data;
  var ppp = 30;

  ctrl.page = 0;
  ctrl.storiesCount = topStories.data.length;
  ctrl.totalPages = Math.ceil(ctrl.storiesCount / ppp);

  ctrl.paginate = function() {
    ctrl.posts = postIds.slice(ctrl.page * ppp, (ctrl.page + 1) * ppp);
  }

  this.previous = function() {
    ctrl.page --;
    ctrl.paginate();
    console.log(ctrl.posts);
  }

  this.next = function() {
    ctrl.page ++;
    ctrl.paginate();
    console.log(ctrl.posts)
  }

  ctrl.paginate();
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);
