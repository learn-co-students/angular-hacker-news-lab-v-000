function PostController(post) {
  debugger
  var vm      = this;

  if (post.type == "comment"){
    debugger
    vm.comment = post;
    // {
    //   by:       post.by,
    //   id:       post.id,
    //   replies:  post.kids,
    //   post_id:  post.parent,
    //   text:     post.text,
    //   time:     post.time 
    // };
  } else {
    vm.id       = post.id;
    vm.author   = post.by;
    vm.title    = post.title;
    vm.url      = post.url;
    vm.score    = post.score;
    vm.comments = post.kids;
  }

  vm.call     = function() {
    debugger
    alert("Bang!");
  }
}

angular
  .module('app')
  .controller('PostController', PostController);