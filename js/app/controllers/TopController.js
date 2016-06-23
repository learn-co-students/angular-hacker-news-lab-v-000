function TopController(top) {
 var topCtrl = this;
 topCtrl.page = 1;
 topCtrl.maxPage = Math.ceil(top.data.length / 30)
 topCtrl.getStoryIds = function() {
   topCtrl.story_ids = top.data.slice((topCtrl.page - 1) * 30, topCtrl.page * 30);
 }
 topCtrl.nextPage = function() {
   if (topCtrl.page < topCtrl.maxPage) {
     console.log("nextPage called.")
     topCtrl.page++;
     topCtrl.getStoryIds();
   }
 }
 topCtrl.prevPage = function() {
   if (topCtrl.page > 1) {
     console.log("prevPage called.")
     topCtrl.page--;
     topCtrl.getStoryIds();
   }
 }
 topCtrl.getStoryIds();

}

angular
   .module('app')
   .controller('TopController', TopController);