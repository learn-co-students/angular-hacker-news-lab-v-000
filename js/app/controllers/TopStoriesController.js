var POSTS_PER_PAGE = 30;

 function TopStoriesController(posts) {
   var ctrl = this;

   ctrl.page = 0;
   ctrl.postsTotal = posts.data.length;
   ctrl.pagesTotal = Math.ceil(ctrl.totalPosts / POSTS_PER_PAGE);

   ctrl.paginate = function () {
     ctrl.posts = posts.data.slice(ctrl.page * POSTS_PER_PAGE, (ctrl.page + 1) * POSTS_PER_PAGE);
   };

   ctrl.nextPage = function () {
     ctrl.page++;
     ctrl.paginatePosts()
   };

   ctrl.previousPage = function () {
     ctrl.page--;
     ctrl.paginatePosts();
   };

   ctrl.paginate();
 }

 angular
   .module('app')
   .controller('TopStoriesController', TopStoriesController);
