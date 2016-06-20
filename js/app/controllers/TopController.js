function TopController(top) {
  var topCtrl = this;
  topCtrl.page = 1;
  topCtrl.maxPage = Math.ceil(top.data.length / 30)

  topCtrl.getStories = function() {
    topCtrl.stories = top.data.slice((topCtrl.page - 1) * 30, topCtrl.page * 30);
  }

  topCtrl.nextPage = function() {
    if (topCtrl.page < topCtrl.maxPage) {
      console.log("nextPage called.")
      topCtrl.page++;
      topCtrl.getStories();
    }
  }

  topCtrl.prevPage = function() {
    if (topCtrl.page > 1) {
      console.log("prevPage called.")
      topCtrl.page--;
      topCtrl.getStories();
    }
  }

  topCtrl.getStories();

}

angular
    .module('app')
    .controller('TopController', TopController);
