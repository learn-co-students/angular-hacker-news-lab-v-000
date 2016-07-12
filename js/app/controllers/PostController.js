function PostController(post, DataService) {

  ctrl = this
  ctrl.story = post.data
  ctrl.comments = []

  ctrl.story.kids.forEach(function(kid){
    DataService.getStoryInfo(kid)
    .then(function(result){
      ctrl.comments.push(result.data)
    })
  })




};

angular
  .module('app')
  .controller('PostController', PostController);
