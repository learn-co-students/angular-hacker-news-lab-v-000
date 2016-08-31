function TopStoriesController(items){
  this.hello = "hello";
  this.items = items.data;
  this.currentPage = 1;
  this.pageLimit = 18;

  this.limitThirty = this.items.splice((this.currentPage -1) * 30, 30)

  this.nextPage = function(){
    this.currentPage += 1;
    this.limitThirty = this.items.splice((this.currentPage -1) * 30, 30)
  };

  this.prevPage = function(){
    this.currentPage -= 1;
    this.limitThirty = this.items.splice((this.currentPage -1) * 30, 30)
  };

}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController)
