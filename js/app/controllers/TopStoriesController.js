function TopStoriesController (postIds) {

  this.postIds = postIds.data;

  this.postsPerPage = 30.0;
  this.pageTotal = Math.ceil(this.postIds.length / this.postsPerPage);
  this.page = 1;

  this.paginatePage = function () {
    this.nextPage = (this.page < this.pageTotal) ? this.page + 1 : undefined;
    this.prevPage = (this.pageTotal > 1 && this.page > 1) ? this.page - 1 : undefined;

    var startingIndex = (this.page - 1) * this.postsPerPage;
    var endingIndex = this.page * this.postsPerPage;
    this.postIdsList = this.postIds.slice(startingIndex, endingIndex);
  };

  this.getNextPage = function () {
    if (this.nextPage) {
      this.page = this.nextPage;
      this.paginatePage();
    }
  };

  this.getPrevPage = function () {
    if (this.prevPage) {
      this.page = this.prevPage;
      this.paginatePage();
    }
  };

  this.paginatePage();
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);
