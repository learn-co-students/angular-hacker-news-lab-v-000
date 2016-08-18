(function() {
  'use strict';
  // Usage:
  //
  // Creates:
  //

  var StoryComment = {
    bindings: {
      id: '='
    },
    templateUrl: 'views/story-comment.html',
    controller: StoryCommentController,
    controllerAs: 'vm'
  };

  StoryCommentController.$inject = ['TopStoriesService', 'getHoursAgoFilter']
  function StoryCommentController (TopStoriesService, getHoursAgoFilter) {
    var vm = this;
    vm.comment;
    vm.commentText;
    vm.commentAuthor;
    vm.commentTime;
    vm.commentKids;

    TopStoriesService
      .getStory(vm.id)
      .then(function(res){
        vm.commentText = res.data.text;
        vm.commentAuthor = res.data.by;
        vm.commentTime = getHoursAgoFilter(res.data.time);
        vm.commentKids = res.data.kids;
      });
  }

  angular
    .module('app')
    .component('storyComment', StoryComment);

})();