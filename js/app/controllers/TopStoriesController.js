function TopStoriesController(posts) { //posts is injected from app.js resolve
  var ctrl = this; //can now refer to this controller using ctrl in methods

  ctrl.posts = posts.data;
  //console.log(ctrl.posts);

}

angular
	.module('app')
	.controller('TopStoriesController', TopStoriesController);
