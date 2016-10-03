function PostsController(HttpService, DateService) {
  var vm = this;

  vm.postIds;
  vm.pages;
  vm.posts = {};
  vm.allPosts;
  vm.currentPage = 1;

  activate();

  function activate(){
    getPostIds();
  }

  function getPostIds(){
    return HttpService.getPostIds().then(function(data){ 
      var postIds = data.data; //list of post Ids
      vm.pages = Math.ceil(postIds.length / 30) ; //page count
      vm.allPosts = getPostPages(postIds); //Array of all posts, divided into sub arrays
      vm.postIds = vm.allPosts[vm.currentPage-1]; //get the post Ids of the current page
      getPosts(vm.postIds); // fetch the posts 
    })    
  }

  function getPosts(postIds) {
    vm.posts = {}; //clear out our posts object
    for (var i = 0 ; i < postIds.length; i++){
      HttpService.getItem(postIds[i]).then(function(data){ 
        var post = data.data;
        vm.posts[post.id] = (post);
        vm.posts[post.id]['time'] = DateService.unixTimeConverter(post.time);
      });
    }
  }

  function getPostPages(postIds){
    pages = [];
    for (var i = 0; i < postIds.length; i += 30 ){
      var posts = postIds.slice(i, i+30)
      pages.push(posts);
    }
    return pages;
  }

  vm.nextPage = function(){
    if (vm.currentPage < vm.allPosts.length){
      vm.currentPage += 1;
      pageChange();
    }
  }

  vm.previousPage = function(){
    if (vm.currentPage > 1){
      vm.currentPage -= 1;
      pageChange();
    }
  }

  function pageChange(){
    vm.postIds = vm.allPosts[vm.currentPage-1];
    getPosts(vm.postIds);
  }

}

angular
  .module('app')
  .controller('PostsController', PostsController);