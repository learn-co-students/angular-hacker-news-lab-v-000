(function() {
  'use strict';

  var StoryComment = {
    bindings: {
      id: '='
    },
    templateUrl: 'views/story-comment.html',
    controller: StoryCommentController,
    controllerAs: 'vm'
  };
  
  StoryCommentController.$inject = ['TopStoriesService', 'getTimeFilter'];
  function StoryCommentController (TopStoriesService, getTimeFilter) {
    var vm = this;
    TopStoriesService 
      .getStory(vm.id)
      .then(function(res){
        vm.commentText = res.data.text;
        vm.commentAuthor = res.data.by;
        vm.commentTime = getTimeFilter(res.data.time);
    });
  }

  angular
    .module('app')
    .component('storyComment', StoryComment);

})();