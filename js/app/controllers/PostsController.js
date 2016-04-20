function PostsController($stateParams, TopStoriesService) {
  console.log("postscontroller.js");
  var ctrl = this;
  ctrl.storyData = "";
  ctrl.comments = "";

  this.story = function(){
    story = TopStoriesService.getStory($stateParams.id).then(function(results){
      ctrl.storyData = results.data;
      ctrl.comments = results.data.kids;
    });
  };

  this.story();

}

PostsController.$inject = ['$stateParams', 'TopStoriesService'];

angular
  .module('app')
  .controller('PostsController', PostsController);
