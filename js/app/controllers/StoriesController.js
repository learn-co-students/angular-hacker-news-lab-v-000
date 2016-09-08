function StoriesController(stories, $filter) {
  var test;
  var pageNum;
  var allStories = [];

  this.pageNum = 1;
  this.test = 'yes';
  allStories = stories.data;

  this.stories = stories.data;

  this.filterStories = function () {
     this.stories = $filter('myPagination')(allStories, this.pageNum)
  }
  this.filterStories();
}

angular
  .module('app')
  .controller('StoriesController', StoriesController)
