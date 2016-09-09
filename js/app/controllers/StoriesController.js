function StoriesController(stories, $filter) {
  var test;
  var pageNum;
  var allStories = [];

  this.pageNum = 1;
  this.test = 'yes';
  allStories = stories.data;

  this.stories = stories.data;

   this.increasePage= function () {
     this.pageNum ++;
     console.log(ctrl.page);
   };

   this.decreasePage= function () {
     this.pageNum --;
     console.log(ctrl.page);
   };
}

angular
  .module('app')
  .controller('StoriesController', StoriesController)
