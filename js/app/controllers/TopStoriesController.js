var POSTS_PER_PAGE = 30; //sets a constant for the number of posts to display per page

function TopStoriesController(posts) { //posts is injected from app.js resolve
  var ctrl = this; //can now refer to this controller using ctrl in methods

  //ctrl.posts = posts.data;
  //console.log(ctrl.posts);

  ctrl.page = 0; //set current page
  ctrl.totalPosts = posts.data.length; //keeps track of total number of posts
  ctrl.totalPages = Math.ceil(ctrl.totalPosts / POSTS_PER_PAGE); //calculates total number of pages needed, rounds up

  ctrl.paginatePosts = function () {
    ctrl.posts = posts.data.slice(ctrl.page * POSTS_PER_PAGE, (ctrl.page + 1) * POSTS_PER_PAGE); //selects the range of posts to display based on current page
  };

  ctrl.nextPage = function () {
    ctrl.page++; //increments current page
    ctrl.paginatePosts()
  };

  ctrl.previousPage = function () {
    ctrl.page--; //decrements current page
    ctrl.paginatePosts();
  };

  ctrl.paginatePosts();
}

angular
	.module('app')
	.controller('TopStoriesController', TopStoriesController);
