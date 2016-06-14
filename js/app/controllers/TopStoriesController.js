function TopStoriesController(TopStoriesService) {
  var ctrl = this;
  var posts_per_page = 30;
  
  ctrl.firstPage = 0;
  ctrl.totalPosts = topStories.data.length;
  ctrl.totalPages = Math.ceil(ctrl.totalPosts / posts_per_page);

  ctrl.paginatePosts = function(){
    ctrl.topStories = topStores.data.slice(ctrl.firstPage * posts_per_page, (ctrl.firstPage + 1) * post_per_page);
  }

  ctrl.prevPage = function(){
    ctrl.firstPage--;
    ctrl.paginatePosts();
  }

  ctrl.nextPage = function(){
    ctrl.firstPage++;
    ctrl.paginatePosts();
  }

  ctrl.paginatePosts();
}

angular
  .module('app')
  .controller('TopStoriesController', TopStoriesController);