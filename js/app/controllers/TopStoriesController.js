hackerNewsApp.controller('TopStoriesController', function(stories){
  var top = this;

  var postsPerPage = 30;
  top.start = 0;
  top.end = postsPerPage;
  top.last = stories.data.length;

  top.slicePosts = function(){
    top.stories = stories.data.slice(top.start, top.end);
  }

  top.prevPage = function(){
    top.start -= postsPerPage;
    top.end -= postsPerPage;
    top.slicePosts();
  }

  top.nextPage = function(){
    top.start += postsPerPage;
    top.end += postsPerPage;
    top.slicePosts();
  }

  top.slicePosts();
  
});