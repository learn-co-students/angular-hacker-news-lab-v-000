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
  
  StoryCommentController.$inject = ['TopStoriesService'];
  function StoryCommentController (TopStoriesService) {
    var vm = this;
    TopStoriesService 
      .getStory(vm.id)
      .then(function(res){
        vm.comment = res.data;
    });
  }

  angular
    .module('app')
    .component('storyComment', StoryComment);

})();