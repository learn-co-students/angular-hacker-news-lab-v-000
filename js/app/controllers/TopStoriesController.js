var postspp = 30;

function TopStoriesController(posts) {
  var vm = this;

  vm.page = 0;
  vm.totalPosts = posts.data.length;
  vm.totalPages = Math.ceil(vm.totalPosts / postspp);

  vm.paginatePosts = function () {
    vm.posts = posts.data.slice(vm.page * postspp, (vm.page + 1) * postspp);
  };

  vm.nextPage = function () {
    vm.page++;
    vm.paginatePosts()
  };

  vm.previousPage = function () {
    vm.page--;
    vm.paginatePosts();
  };

  vm.paginatePosts();
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);
